import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/app-state/app-state.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {Operation as UserOperation, AuthorizationStatus} from '../../reducer/user/user.js';
import Main from '../main/main.jsx';
import Offer from '../offer/offer.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import Favorites from '../favorites/favorites.jsx';
import NoFavorites from '../no-favorites/no-favorites.jsx';
import Error from '../error/error.jsx';
import PrivateRoute from '../private-route/private-route.jsx';
import {AppRoute} from '../../const.js';
import {getCard, getSortType, getRequestStatus} from '../../reducer/app-state/selectors.js';
import {getOffers, getOffersByCity, getCitiesList, getCity, getOffersNearby, getComments, getPostingCommentStatus} from '../../reducer/data/selectors.js';
import {getAuthorizationStatus, getUser} from '../../reducer/user/selectors.js';
import PropTypes from 'prop-types';


const App = (props) => {
  const {
    offers,
    offersByCity,
    city,
    citiesList,
    card,
    sortType,
    user,
    offersNearby,
    comments,
    isPostingComment,
    onPlaceCardClick,
    onCityClick,
    onPlaceCardMouseOver,
    onPlaceCardMouseLeave,
    onCommentSubmit,
    onLoginSubmit,
    toggleIsBookmarked,
    authorizationStatus,
    isRequestSuccess
  } = props;

  const numberOfPlacesToStay = offers.filter((element) => element.city.name === city.name).length;
  const favorites = offers.filter((element) => element.isBookmarked);

  return (
    <Switch>
      <Route
        exact
        path={AppRoute.MAIN}
        render={() => {
          if (isRequestSuccess) {
            return (
              <Main
                placesCount={numberOfPlacesToStay}
                offers={offersByCity}
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
          } else {
            return (
              <Error />
            );
          }
        }}
      />
      <Route
        exact
        path={`${AppRoute.ROOM}/:id`}
        render={(routeProps) => {
          const {id} = routeProps.match.params;
          return (
            <Offer
              id={Number.parseInt(id, 10)}
              offer={offers.find((element) => element.id === Number.parseInt(id, 10))}
              card={card}
              sortType={sortType}
              user={user}
              offersNearby={offersNearby}
              comments={comments}
              onCommentSubmit={onCommentSubmit}
              isPostingComment={isPostingComment}
              toggleIsBookmarked={toggleIsBookmarked}
              onPlaceCardClick={onPlaceCardClick}
            />
          );
        }}
      />
      <PrivateRoute
        exact
        path={AppRoute.FAVORITES}
        render={() => {
          if (favorites.length === 0 && Array.isArray(favorites)) {
            return (
              <NoFavorites
                user={user}
              />
            );
          } else {
            return (
              <Favorites
                user={user}
                favorites={favorites}
                onPlaceCardClick={onPlaceCardClick}
              />
            );
          }
        }}
      />
      <Route
        exact
        path={AppRoute.SIGN_IN}
        render={() => {
          if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
            return (
              <SignIn
                onSubmit={onLoginSubmit}
              />
            );
          } else {
            return (
              <Redirect to={AppRoute.FAVORITES} />
            );
          }
        }}
      />
    </Switch>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  offersByCity: PropTypes.array.isRequired,
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
  onLoginSubmit: PropTypes.func,
  toggleIsBookmarked: PropTypes.func,
  authorizationStatus: PropTypes.string.isRequired,
  isRequestSuccess: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  offersByCity: getOffersByCity(state),
  city: getCity(state),
  citiesList: getCitiesList(state),
  card: getCard(state),
  sortType: getSortType(state),
  user: getUser(state),
  offersNearby: getOffersNearby(state),
  comments: getComments(state),
  isPostingComment: getPostingCommentStatus(state),
  authorizationStatus: getAuthorizationStatus(state),
  isRequestSuccess: getRequestStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onPlaceCardClick(id) {
    dispatch(DataOperation.loadOffersNearby(id))
    .then(() => dispatch(DataOperation.loadComments(id)))
    .then(() => dispatch(ActionCreator.changeRequestStatus(true)));
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
    dispatch(DataOperation.postComment(id, comment))
    .then(() => dispatch(ActionCreator.changeRequestStatus(true)));
  },
  toggleIsBookmarked(id, isBookmarked) {
    dispatch(DataOperation.changeFavoriteStatus({id, isBookmarked: Number(!isBookmarked)}))
    .then(() => dispatch(ActionCreator.changeRequestStatus(true)));
  },
  onLoginSubmit(authData) {
    dispatch(UserOperation.login({
      email: authData.email,
      password: authData.password
    }))
    .then(() => dispatch(DataOperation.loadFavorites()))
    .then(() => dispatch(ActionCreator.changeRequestStatus(true)));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
