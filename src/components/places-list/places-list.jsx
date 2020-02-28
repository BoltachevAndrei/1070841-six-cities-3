import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

const PlacesList = (props) => {
  const {offers, listClass, cardClass, wrapperClass, onPlaceCardClick, onPlaceCardMouseOver, onPlaceCardMouseLeave} = props;

  return (
    <div className={listClass}>
      {offers.map((offer) => {
        return (
          <PlaceCard
            key={offer.id}
            offer={offer}
            offers={offers}
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
};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired
      })
  ).isRequired,
  listClass: PropTypes.string.isRequired,
  cardClass: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string.isRequired,
  onPlaceCardClick: PropTypes.func.isRequired,
  onPlaceCardMouseOver: PropTypes.func,
  onPlaceCardMouseLeave: PropTypes.func
};

export default PlacesList;
