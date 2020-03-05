import React, {memo} from 'react';
import PropTypes from 'prop-types';
import PlacesSorting from '../places-sorting/places-sorting.jsx';
import PlacesList from '../places-list/places-list.jsx';
import Map from '../map/map.jsx';

const CitiesPlaces = memo(function CitiesPlaces(props) {
  const {offers, activeCity, sortType, placesCount, card, onPlaceCardClick, onPlaceCardMouseOver, onPlaceCardMouseLeave} = props;
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placesCount} places to stay in {activeCity}</b>
        <PlacesSorting />
        <PlacesList
          offers={offers}
          activeCity={activeCity}
          sortType={sortType}
          listClass="cities__places-list places__list tabs__content"
          cardClass="cities__place-card place-card"
          wrapperClass="cities__image-wrapper place-card__image-wrapper"
          onPlaceCardClick={onPlaceCardClick}
          onPlaceCardMouseOver={onPlaceCardMouseOver}
          onPlaceCardMouseLeave={onPlaceCardMouseLeave}
        />
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map
            offers={offers.filter((offer) => offer.city === activeCity)}
            card={card}
          />
        </section>
      </div>
    </div>
  );
});

CitiesPlaces.propTypes = {
  offers: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
  placesCount: PropTypes.number.isRequired,
  card: PropTypes.number.isRequired,
  sortType: PropTypes.string.isRequired,
  onPlaceCardClick: PropTypes.func.isRequired,
  onPlaceCardMouseOver: PropTypes.func,
  onPlaceCardMouseLeave: PropTypes.func
};

export default CitiesPlaces;
