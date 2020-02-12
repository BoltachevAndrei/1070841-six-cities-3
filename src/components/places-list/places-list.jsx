import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

export default class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.onPlaceCardMouseOver = this.onPlaceCardMouseOver.bind(this);
    this.state = {
      activeCard: null
    };
  }

  onPlaceCardMouseOver(id) {
    this.setState({
      activeCard: id
    });
  }

  render() {
    const {offers, onPlaceCardClick} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => {
          return (
            <PlaceCard
              key={offer.id}
              offer={offer}
              onPlaceCardClick={onPlaceCardClick}
              onPlaceCardMouseOver={this.onPlaceCardMouseOver}
            />
          );
        })}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired
      })
  ).isRequired,
  onPlaceCardClick: PropTypes.func.isRequired
};
