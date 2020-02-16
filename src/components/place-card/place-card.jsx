import React from 'react';
import PropTypes from 'prop-types';

const PlaceCard = (props) => {
  const {id, isPremium, images, price, isBookmarked, rating, title, features} = props.offer;
  const placeImage = images[0] ? <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place image" /> : null;
  const placeIsPremium = isPremium ?
    (<div className="place-card__mark">
      <span>Premium</span>
    </div>) : ``;
  const placeIsBookmarkedClass = isBookmarked ? `place-card__bookmark-button place-card__bookmark-button--active button` : `place-card__bookmark-button button`;
  const placeIsBookmarkedText = isBookmarked ? `In bookmarks` : `To bookmarks`;

  return (
    <article className="cities__place-card place-card" onMouseOver={() => props.onPlaceCardMouseOver(id)}>
      {placeIsPremium}
      <div className="cities__image-wrapper place-card__image-wrapper">
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
        <h2 className="place-card__name" onClick={() => props.onPlaceCardClick(id)}>
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{features.entire}</p>
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
  onPlaceCardClick: PropTypes.func.isRequired
};

export default PlaceCard;
