import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';
import Main from '../main/main.jsx';
import Offer from '../offer/offer.jsx';
import PropTypes from 'prop-types';

class App extends PureComponent {

  _renderApp() {
    const {offers, offer, city, card, sortType, onPlaceCardClick, onCityClick, onPlaceCardMouseOver, onPlaceCardMouseLeave} = this.props;
    const numberOfPlacesToStay = offers.filter((element) => element.city === city).length;
    if (!offer) {
      return (
        <Main
          placesCount={numberOfPlacesToStay}
          offers={offers}
          activeCity={city}
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
      />
    );
  }

  render() {
    const {offers} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {this._renderApp()}
          </Route>
          <Route exact path='/offer'>
            <Offer offers={offers} />
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
  card: PropTypes.number.isRequired,
  sortType: PropTypes.string.isRequired,
  onPlaceCardClick: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onPlaceCardMouseOver: PropTypes.func,
  onPlaceCardMouseLeave: PropTypes.func
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  offer: state.offer,
  city: state.city,
  card: state.card,
  sortType: state.sortType
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
