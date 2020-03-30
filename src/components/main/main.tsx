import * as React from 'react';
import HomeLink from '../home-link/home-link';
import CitiesList from '../cities-list/cities-list';
import CitiesPlaces from '../cities-places/cities-places';
import CitiesNoPlaces from '../cities-no-places/cities-no-places';
import ProfileLink from '../profile-link/profile-link';
import {Offer, City, SortTypeList, User} from '../../types';

interface Props {
  placesCount: number;
  offers: Array<Offer>;
  activeCity: City;
  citiesList: Array<City>;
  card: number;
  sortType: SortTypeList;
  user: User;
  onPlaceCardClick: () => void;
  onCityClick: () => void;
  onPlaceCardMouseOver: () => void;
  onPlaceCardMouseLeave: () => void;
}

const Main: React.FunctionComponent<Props> = (props: Props) => {
  const {
    placesCount,
    offers,
    activeCity,
    citiesList,
    card,
    sortType,
    user,
    onPlaceCardClick,
    onCityClick,
    onPlaceCardMouseOver,
    onPlaceCardMouseLeave
  } = props;

  return (
    <React.Fragment>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <div className="page page--gray page--main">
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

        <main className={`page__main page__main--index${placesCount > 0 ? `` : ` page__main--index-empty`}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList
                citiesList={citiesList}
                activeCity={activeCity}
                onCityClick={onCityClick}
              />
            </section>
          </div>
          <div className="cities">
            {!!placesCount &&
              <CitiesPlaces
                offers={offers}
                activeCity={activeCity}
                placesCount={placesCount}
                card={card}
                sortType={sortType}
                onPlaceCardClick={onPlaceCardClick}
                onPlaceCardMouseOver={onPlaceCardMouseOver}
                onPlaceCardMouseLeave={onPlaceCardMouseLeave}
              />
            }
            {!!placesCount ||
              <CitiesNoPlaces
                activeCity={activeCity}
              />
            }
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Main;
