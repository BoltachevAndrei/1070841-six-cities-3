import * as React from 'react';
import {Link} from 'react-router-dom';
import Rating from '../rating/rating';
import {capitalizeString} from '../../utils';
import {AppRoute} from '../../const';
import {Offer} from '../../types';

interface Props {
  offer: Offer;
  cardClass: string;
  wrapperClass: string;
  imageSizeWidth: number;
  imageSizeHeight: number;
  onPlaceCardMouseOver?: (id: number) => void;
  onPlaceCardMouseLeave?: () => void;
  onPlaceCardClick: (id: number) => void;
}

const PlaceCard: React.FunctionComponent<Props> = (props: Props) => {
  const {
    id,
    isPremium,
    price,
    isBookmarked,
    rating,
    title,
    features,
    previewImage
  } = props.offer;

  const {
    cardClass,
    wrapperClass,
    imageSizeWidth,
    imageSizeHeight,
    onPlaceCardMouseOver,
    onPlaceCardMouseLeave,
    onPlaceCardClick
  } = props;

  const placeImage = previewImage ? <img className="place-card__image" src={previewImage} width={imageSizeWidth} height={imageSizeHeight} alt="Place image" /> : null;
  const placeIsPremium = isPremium ?
    (<div className="place-card__mark">
      <span>Premium</span>
    </div>) : ``;
  const placeIsBookmarkedClass = isBookmarked ? `place-card__bookmark-button place-card__bookmark-button--active button` : `place-card__bookmark-button button`;
  const placeIsBookmarkedText = isBookmarked ? `In bookmarks` : `To bookmarks`;

  return (
    <article
      className={cardClass}
      onMouseOver={onPlaceCardMouseOver ? () => onPlaceCardMouseOver(id) : null}
      onMouseLeave={onPlaceCardMouseLeave}
    >
      {placeIsPremium}
      <div className={wrapperClass}>
        <a href="#">
          {placeImage}
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price ? price : ``}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={placeIsBookmarkedClass} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{placeIsBookmarkedText}</span>
          </button>
        </div>
        <Rating
          rating={rating}
          type="place-card"
        />
        <h2
          className="place-card__name"
          onClick={onPlaceCardClick ? () => onPlaceCardClick(id) : null}
        >
          <Link to={`${AppRoute.ROOM}/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{capitalizeString(features.entire)}</p>
      </div>
    </article>
  );
};

export default PlaceCard;
