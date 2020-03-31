import * as React from 'react';
import PlacesSorting from '../places-sorting/places-sorting';
import PlacesList from '../places-list/places-list';
import Map from '../map/map';
import {Offer, City, SortTypeList} from '../../types';

const IMAGE_SIZE_HEIGHT = 200;
const IMAGE_SIZE_WIDTH = 260;

interface Props {
  offers: Array<Offer>;
  activeCity: City;
  sortType: SortTypeList;
  placesCount: number;
  card: number;
  onPlaceCardClick: () => void;
  onPlaceCardMouseOver: () => void;
  onPlaceCardMouseLeave: () => void;
}

const CitiesPlaces: React.FunctionComponent<Props> = React.memo(function CitiesPlaces(props: Props) {
  const {
    offers,
    activeCity,
    sortType,
    placesCount,
    card,
    onPlaceCardClick,
    onPlaceCardMouseOver,
    onPlaceCardMouseLeave
  } = props;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placesCount} places to stay in {activeCity.name}</b>
        <PlacesSorting />
        <PlacesList
          offers={offers}
          sortType={sortType}
          listClass="cities__places-list places__list tabs__content"
          cardClass="cities__place-card place-card"
          wrapperClass="cities__image-wrapper place-card__image-wrapper"
          imageSizeHeight={IMAGE_SIZE_HEIGHT}
          imageSizeWidth={IMAGE_SIZE_WIDTH}
          onPlaceCardClick={onPlaceCardClick}
          onPlaceCardMouseOver={onPlaceCardMouseOver}
          onPlaceCardMouseLeave={onPlaceCardMouseLeave}
        />
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map
            offers={offers.filter((offer) => offer.city.name === activeCity.name)}
            card={card}
            activeCity={activeCity}
          />
        </section>
      </div>
    </div>
  );
});

export default CitiesPlaces;
