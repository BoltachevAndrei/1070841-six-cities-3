import React, {memo} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

import {sortOffers} from '../../utils.js';

const PlacesList = memo(function PlacesList(props) {
  const {
    offers,
    sortType,
    listClass,
    cardClass,
    wrapperClass,
    imageSizeHeight,
    imageSizeWidth,
    onPlaceCardClick,
    onPlaceCardMouseOver,
    onPlaceCardMouseLeave
  } = props;

  const sortedOffers = sortOffers(offers, sortType);

  return (
    <div className={listClass}>
      {sortedOffers.map((offer) => {
        return (
          <PlaceCard
            key={offer.id}
            offer={offer}
            offers={sortedOffers}
            cardClass={cardClass}
            wrapperClass={wrapperClass}
            imageSizeHeight={imageSizeHeight}
            imageSizeWidth={imageSizeWidth}
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
  sortType: PropTypes.string.isRequired,
  listClass: PropTypes.string.isRequired,
  cardClass: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string.isRequired,
  onPlaceCardClick: PropTypes.func.isRequired,
  onPlaceCardMouseOver: PropTypes.func,
  onPlaceCardMouseLeave: PropTypes.func,
  imageSizeHeight: PropTypes.number.isRequired,
  imageSizeWidth: PropTypes.number.isRequired
};

export default PlacesList;
