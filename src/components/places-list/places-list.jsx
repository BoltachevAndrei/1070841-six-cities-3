import React, {memo} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

import {getOffersByCity, sortOffers} from '../../utils.js';

const PlacesList = memo(function PlacesList(props) {
  const {offers, activeCity, sortType, listClass, cardClass, wrapperClass, onPlaceCardClick, onPlaceCardMouseOver, onPlaceCardMouseLeave} = props;

  const sortedOffers = sortOffers(offers, sortType);
  const offersByCity = getOffersByCity(sortedOffers, activeCity);

  return (
    <div className={listClass}>
      {offersByCity.map((offer) => {
        return (
          <PlaceCard
            key={offer.id}
            offer={offer}
            offers={offersByCity}
            cardClass={cardClass}
            wrapperClass={wrapperClass}
            onPlaceCardClick={onPlaceCardClick}
            onPlaceCardMouseOver={onPlaceCardMouseOver}
            onPlaceCardMouseLeave={onPlaceCardMouseLeave}
          />
        );
      })}
    </div>
  );
});

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired
      })
  ).isRequired,
  activeCity: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  listClass: PropTypes.string.isRequired,
  cardClass: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string.isRequired,
  onPlaceCardClick: PropTypes.func.isRequired,
  onPlaceCardMouseOver: PropTypes.func,
  onPlaceCardMouseLeave: PropTypes.func
};

export default PlacesList;
