import React from 'react';
import PropTypes from 'prop-types';
import {capitalizeString} from '../../utils.js';

const PlaceCard = (props) => {
  const {id, isPremium, images, price, isBookmarked, rating, title, features} = props.offer;
  const {onPlaceCardMouseOver, onPlaceCardMouseLeave, onPlaceCardClick} = props;
  const {cardClass, wrapperClass} = props;
  const placeImage = images[0] ? <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place image" /> : null;
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
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={() => onPlaceCardClick(id)}>
          <a href="#">{title}</a>
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
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    features: PropTypes.object.isRequired,
  }).isRequired,
  onPlaceCardMouseOver: PropTypes.func.isRequired,
  onPlaceCardMouseLeave: PropTypes.func.isRequired,
  onPlaceCardClick: PropTypes.func.isRequired,
  cardClass: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string.isRequired
};

export default PlaceCard;
