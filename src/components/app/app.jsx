import React, {PureComponent} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/app-state/app-state.js';
import {Operation} from '../../reducer/data/data.js';
import Main from '../main/main.jsx';
import Offer from '../offer/offer.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import Favorites from '../favorites/favorites.jsx';
import PropTypes from 'prop-types';

import {getOffersByCity, getCitiesList} from '../../reducer/data/selectors.js';
import {getUserInfo} from '../../reducer/user/selectors.js';
import {AppRoute} from '../../const.js';

class App extends PureComponent {
  _renderApp() {
    const {offers, offer, city, citiesList, card, sortType, user, offersNearby, comments, isPostingComment, onPlaceCardClick, onCityClick, onPlaceCardMouseOver, onPlaceCardMouseLeave, onCommentSubmit, toggleIsBookmarked} = this.props;
    const numberOfPlacesToStay = offers.filter((element) => element.city.name === city.name).length;
    if (!offer) {
      return (
        <Main
          placesCount={numberOfPlacesToStay}
          offers={offers}
          activeCity={city}
          citiesList={citiesList}
          card={card}
          sortType={sortType}
          user={user}
          onPlaceCardClick={onPlaceCardClick}
          onCityClick={onCityClick}
          onPlaceCardMouseOver={onPlaceCardMouseOver}
          onPlaceCardMouseLeave={onPlaceCardMouseLeave}
        />
      );
    }
    return (
      <Offer
        offer={offers.find((element) => element.id === offer)}
        offers={offers}
        card={card}
        sortType={sortType}
        user={user}
        offersNearby={offersNearby}
        comments={comments}
        onCommentSubmit={onCommentSubmit}
        isPostingComment={isPostingComment}
        toggleIsBookmarked={toggleIsBookmarked}
      />
    );
  }

  render() {
    const {user} = this.props;
    return (
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          {this._renderApp()}
        </Route>
        <Route
          exact
          path={AppRoute.FAVORITES}
          render={() => {
            return (
              <Favorites
                user={user}
              />
            );
          }}
        />
        <Route
          exact
          path={AppRoute.SIGN_IN}
          render={() => {
            return (
              <SignIn
                onSubmit={() => {}}
              />
            );
          }}
        />
      </Switch>
    );
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  offer: PropTypes.number.isRequired,
  city: PropTypes.object.isRequired,
  citiesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  card: PropTypes.number.isRequired,
  sortType: PropTypes.string.isRequired,
  user: PropTypes.shape({
    'avatar_url': PropTypes.string.isRequired,
    'email': PropTypes.string.isRequired,
    'id': PropTypes.number.isRequired,
    'is_pro': PropTypes.bool.isRequired,
    'name': PropTypes.string.isRequired
  }),
  offersNearby: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
  isPostingComment: PropTypes.bool.isRequired,
  onPlaceCardClick: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onPlaceCardMouseOver: PropTypes.func,
  onPlaceCardMouseLeave: PropTypes.func,
  onCommentSubmit: PropTypes.func,
  toggleIsBookmarked: PropTypes.func
};

const mapStateToProps = (state) => ({
  offers: getOffersByCity(state),
  offer: state.APP_STATE.offer,
  city: state.APP_STATE.city,
  citiesList: getCitiesList(state),
  card: state.APP_STATE.card,
  sortType: state.APP_STATE.sortType,
  user: getUserInfo(state),
  offersNearby: state.DATA.offersNearby,
  comments: state.DATA.comments,
  isPostingComment: state.DATA.isPostingComment
});

const mapDispatchToProps = (dispatch) => ({
  onPlaceCardClick(id) {
    dispatch(Operation.loadOffersNearby(id));
    dispatch(Operation.loadComments(id));
    dispatch(ActionCreator.changeOffer(id));
  },
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  onPlaceCardMouseOver(id) {
    dispatch(ActionCreator.changeCard(id));
  },
  onPlaceCardMouseLeave() {
    dispatch(ActionCreator.changeCard(0));
  },
  onCommentSubmit(id, comment) {
    dispatch(Operation.postComment(id, comment));
  },
  toggleIsBookmarked(id, isBookmarked) {
    dispatch(Operation.changeFavoriteStatus({id, isBookmarked: Number(!isBookmarked)}));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
