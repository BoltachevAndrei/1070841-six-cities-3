import * as React from 'react';
import PlaceCard from '../place-card/place-card';
import {sortOffers} from '../../utils';
import {Offer, SortTypeList} from '../../types';

interface Props {
  offers: Array<Offer>;
  sortType: SortTypeList;
  listClass: string;
  cardClass: string;
  wrapperClass: string;
  imageSizeHeight: number;
  imageSizeWidth: number;
  onPlaceCardClick: () => void;
  onPlaceCardMouseOver?: () => void;
  onPlaceCardMouseLeave?: () => void;
}

const PlacesList: React.FunctionComponent<Props> = React.memo(function PlacesList(props: Props) {
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

export default PlacesList;
