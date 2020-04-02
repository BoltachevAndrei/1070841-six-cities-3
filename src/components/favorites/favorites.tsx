import * as React from 'react';
import HomeLink from '../home-link/home-link';
import ProfileLink from '../profile-link/profile-link';
import PlaceCard from '../place-card/place-card';
import {getCitiesList} from '../../utils';
import {Offer, User} from '../../types';

const IMAGE_SIZE_HEIGHT = 110;
const IMAGE_SIZE_WIDTH = 150;

const HOME_LINK_HEIGHT = 33;
const HOME_LINK_WIDTH = 64;

interface Props {
  favorites: Array<Offer>;
  user: User;
  onPlaceCardClick: () => void;
  onHomeLinkClick: () => void;
}

const Favorites: React.FunctionComponent<Props> = (props: Props) => {
  const {
    favorites,
    user,
    onPlaceCardClick,
    onHomeLinkClick
  } = props;

  const favoritesByCity = getCitiesList(favorites).map((element) => ({city: element, offers: favorites.filter((element2) => element.name === element2.city.name)}));

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <HomeLink
                onHomeLinkClick={onHomeLinkClick}
              />
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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoritesByCity.map((favorite) => {
                return (
                  <li className="favorites__locations-items" key={favorite.city.name}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{favorite.city.name}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {favorite.offers.map((offer) => {
                        return (
                          <PlaceCard
                            key={offer.id}
                            offer={offer}
                            cardClass="favorites__card place-card"
                            wrapperClass="favorites__image-wrapper place-card__image-wrapper"
                            imageSizeHeight={IMAGE_SIZE_HEIGHT}
                            imageSizeWidth={IMAGE_SIZE_WIDTH}
                            onPlaceCardClick={onPlaceCardClick}
                          />
                        );
                      })}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <HomeLink
          homeLinkClass="footer"
          homeLinkHeight={HOME_LINK_HEIGHT}
          homeLinkWidth={HOME_LINK_WIDTH}
          onHomeLinkClick={onHomeLinkClick}
        />
      </footer>
    </div>
  );
};

export default Favorites;
