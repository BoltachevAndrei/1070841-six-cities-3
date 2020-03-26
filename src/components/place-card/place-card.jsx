import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Rating from '../rating/rating.jsx';
import {capitalizeString} from '../../utils.js';
import {AppRoute} from '../../const.js';

const PlaceCard = (props) => {
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
      onMouseOver={() => onPlaceCardMouseOver(id)}
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
        <h2 className="place-card__name" onClick={() => onPlaceCardClick(id)}>
          <Link to={`${AppRoute.ROOM}/${id}`}>
            {title}
          </Link>
          {/* <a href="#">{title}</a> */}
        </h2>
        <p className="place-card__type">{capitalizeString(features.entire)}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    features: PropTypes.object.isRequired,
    previewImage: PropTypes.string.isRequired
  }).isRequired,
  onPlaceCardMouseOver: PropTypes.func.isRequired,
  onPlaceCardMouseLeave: PropTypes.func.isRequired,
  onPlaceCardClick: PropTypes.func.isRequired,
  cardClass: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string.isRequired,
  imageSizeHeight: PropTypes.number.isRequired,
  imageSizeWidth: PropTypes.number.isRequired
};

export default PlaceCard;
