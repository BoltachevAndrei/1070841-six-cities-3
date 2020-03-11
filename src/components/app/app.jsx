import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/app-state/app-state.js';
import Main from '../main/main.jsx';
import Offer from '../offer/offer.jsx';
import PropTypes from 'prop-types';

import {getOffersByCity, getCitiesList} from '../../reducer/data/selectors.js';

class App extends PureComponent {

  _renderApp() {
    const {offers, offer, city, citiesList, card, sortType, onPlaceCardClick, onCityClick, onPlaceCardMouseOver, onPlaceCardMouseLeave} = this.props;
    const numberOfPlacesToStay = offers.filter((element) => element.city === city).length;
    if (!offer) {
      return (
        <Main
          placesCount={numberOfPlacesToStay}
          offers={offers}
          activeCity={city}
          citiesList={citiesList}
          card={card}
          sortType={sortType}
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
      />
    );
  }

  render() {
    const {offers, card, sortType} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {this._renderApp()}
          </Route>
          <Route exact path='/offer'>
            <Offer offers={offers} card={card} sortType={sortType}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  offer: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  citiesList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  card: PropTypes.number.isRequired,
  sortType: PropTypes.string.isRequired,
  onPlaceCardClick: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onPlaceCardMouseOver: PropTypes.func,
  onPlaceCardMouseLeave: PropTypes.func
};

const mapStateToProps = (state) => ({
  offers: getOffersByCity(state),
  offer: state.APP_STATE.offer,
  city: state.APP_STATE.city,
  citiesList: getCitiesList(state),
  card: state.APP_STATE.card,
  sortType: state.APP_STATE.sortType
});

const mapDispatchToProps = (dispatch) => ({
  onPlaceCardClick(id) {
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
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
