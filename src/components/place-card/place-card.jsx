import React from 'react';
import PropTypes from 'prop-types';

const PlaceCard = (props) => {
  const {id, isPremium, image, price, isBookmarked, rating, title, type} = props.offer;
  const placeImage = image ? <img className="place-card__image" src={image} width="260" height="200" alt="Place image" /> : null;
  const placeIsPremium = isPremium ?
    (<div className="place-card__mark">
      <span>Premium</span>
    </div>) : ``;
  const placeIsBookmarked = isBookmarked ?
    (<button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>) :
    (<button className="place-card__bookmark-button button" type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>);

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
          {placeIsBookmarked}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isPremium: PropTypes.bool,
    image: PropTypes.string,
    price: PropTypes.number.isRequired,
    isBookmarked: PropTypes.bool,
    rating: PropTypes.number,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
  onPlaceCardMouseOver: PropTypes.func.isRequired
};

export default PlaceCard;
