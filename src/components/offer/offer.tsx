import * as React from 'react';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';
import PlacesList from '../places-list/places-list';
import ReviewsForm from '../reviews-form/reviews-form';
import Rating from '../rating/rating';
import {capitalizeString} from '../../utils';
import withSubmitForm from '../../hocs/with-submit-form/with-submit-form';
import ProfileLink from '../profile-link/profile-link';
import HomeLink from '../home-link/home-link';
import {Offer as OfferType, SortTypeList, User, Comment} from '../../types';

const IMAGE_SIZE_HEIGHT = 200;
const IMAGE_SIZE_WIDTH = 260;
const IMAGES_TO_SHOW_LIMIT = 6;

interface Props {
  id: number;
  card: number;
  sortType: SortTypeList;
  user: User;
  offer: OfferType;
  offersNearby: Array<OfferType>;
  comments: Array<Comment>;
  isPostingComment: boolean;
  onCommentSubmit: () => void;
  onPlaceCardClick: (id: number) => void;
  toggleIsBookmarked: (id: number, isBookmarked: boolean) => void;
}

export default class Offer extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {id, onPlaceCardClick} = this.props;
    onPlaceCardClick(id);
  }

  render() {
    if (!this.props.offer) {
      return null;
    }

    const ReviewsFormWrapped = withSubmitForm(ReviewsForm);

    const {
      id,
      city,
      isPremium,
      images,
      price,
      isBookmarked,
      rating,
      title,
      description,
      features,
      inside,
      host
    } = this.props.offer;

    const {
      card,
      sortType,
      user,
      offer,
      offersNearby,
      comments,
      isPostingComment,
      onCommentSubmit,
      toggleIsBookmarked
    } = this.props;

    const placeIsPremium = isPremium ?
      (<div className="property__mark">
        <span>Premium</span>
      </div>) : ``;
    const hostIsSuperClass = host.isSuper ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper` : `property__avatar-wrapper user__avatar-wrapper`;
    const placeIsBookmarkedClass = isBookmarked ? `property__bookmark-button property__bookmark-button--active button` : `property__bookmark-button button`;
    const imagesToShow = images.slice(0, IMAGES_TO_SHOW_LIMIT);
    const currentOfferWithNearby = [].concat(offersNearby).concat(offer);

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <HomeLink />
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <ProfileLink
                      user={user}
                    />
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
                {imagesToShow.map((image, index) => {
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
                    <svg className="place-card__bookmark-icon" width="31" height="33">
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
                      <img className="property__avatar user__avatar" src={`/${host.avatar}`} width="74" height="74" alt="Host avatar" />
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
                offers={currentOfferWithNearby}
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
                sortType={sortType}
                listClass="near-places__list places__list"
                cardClass="near-places__card place-card"
                wrapperClass="near-places__image-wrapper place-card__image-wrapper"
                imageSizeHeight={IMAGE_SIZE_HEIGHT}
                imageSizeWidth={IMAGE_SIZE_WIDTH}
              />
            </section>
          </div>
        </main>
      </div>
    );
  }
}
