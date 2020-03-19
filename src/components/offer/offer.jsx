import React from 'react';
import PropTypes from 'prop-types';
import ReviewsList from '../reviews-list/reviews-list.jsx';
import Map from '../map/map.jsx';
import PlacesList from '../places-list/places-list.jsx';
import ReviewsForm from '../reviews-form/reviews-form.jsx';
import Rating from '../rating/rating.jsx';
import {capitalizeString} from '../../utils.js';
import withSubmitForm from '../../hocs/with-submit-form/with-submit-form.js';

const Offer = (props) => {
  const ReviewsFormWrapped = withSubmitForm(ReviewsForm);
  const {id, city, isPremium, images, price, isBookmarked, rating, title, description, features, inside, host} = props.offer;
  const {card, sortType, user, offersNearby, comments, isPostingComment, onCommentSubmit, toggleIsBookmarked} = props;
  const placeIsPremium = isPremium ?
    (<div className="property__mark">
      <span>Premium</span>
    </div>) : ``;
  const hostIsSuperClass = host.isSuper ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper` : `property__avatar-wrapper user__avatar-wrapper`;
  const placeIsBookmarkedClass = isBookmarked ? `property__bookmark-button property__bookmark-button--active button` : `property__bookmark-button button`;
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{user ? user.email : `Sign In`}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, index) => {
                return (
                  <div key={`${image}-${index}`} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {placeIsPremium}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={placeIsBookmarkedClass} type="button" onClick={() => toggleIsBookmarked(id, isBookmarked)}>
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <Rating
                rating={rating}
                type="property"
              />
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {capitalizeString(features.entire)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${features.bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${features.adults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price ? price : ``}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {inside.map((element, index) => {
                    return (
                      <li key={`${element}-${index}`} className="property__inside-item">
                        {element}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={hostIsSuperClass}>
                    <img className="property__avatar user__avatar" src={host.avatar} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList reviews={comments} />
                {!!user &&
                  <ReviewsFormWrapped
                    id={id}
                    onSubmit={onCommentSubmit}
                    isPostingComment={isPostingComment}
                  />
                }
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              offers={offersNearby}
              card={card}
              activeCity={city}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList
              offers={offersNearby}
              activeCity={city}
              sortType={sortType}
              listClass="near-places__list places__list"
              cardClass="near-places__card place-card"
              wrapperClass="near-places__image-wrapper place-card__image-wrapper"
              onPlaceCardClick={() => {}}
              onPlaceCardMouseOver={() => {}}
              onPlaceCardMouseLeave={() => {}}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

Offer.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired
      }).isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    isPremium: PropTypes.bool.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.shape({
      entire: PropTypes.string.isRequired,
      bedrooms: PropTypes.string.isRequired,
      adults: PropTypes.string.isRequired
    }).isRequired,
    inside: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired
    }).isRequired,
    previewImage: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    zoom: PropTypes.number.isRequired
  }),
  card: PropTypes.number.isRequired,
  sortType: PropTypes.string.isRequired,
  user: PropTypes.shape({
    'avatar_url': PropTypes.string.isRequired,
    'email': PropTypes.string.isRequired,
    'id': PropTypes.number.isRequired,
    'is_pro': PropTypes.bool.isRequired,
    'name': PropTypes.string.isRequired
  }),
  offersNearby: PropTypes.array,
  comments: PropTypes.array,
  isPostingComment: PropTypes.bool.isRequired,
  onCommentSubmit: PropTypes.func,
  toggleIsBookmarked: PropTypes.func
};

export default Offer;
