import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import Offer from '../offer/offer.jsx';
import PropTypes from 'prop-types';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      offer: null
    };
  }

  _renderApp() {
    const {offer} = this.state;
    if (!offer) {
      return (
        <Main
          placesCount={this.props.placesCount}
          offers={this.props.offers}
          activeCity={this.props.activeCity}
          onPlaceCardClick={(id) => this.setState({offer: id})}
        />
      );
    }
    return (
      <Offer
        offer={this.props.offers.find((element) => element.id === this.state.offer)}
        offers={this.props.offers}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {this._renderApp()}
          </Route>
          <Route exact path='/offer'>
            <Offer offers={this.props.offers} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
};
