import React from 'react';
import PropTypes from 'prop-types';
import HomeLink from '../home-link/home-link.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import CitiesPlaces from '../cities-places/cities-places.jsx';
import CitiesNoPlaces from '../cities-no-places/cities-no-places.jsx';
import ProfileLink from '../profile-link/profile-link.jsx';

const Main = (props) => {
  const {placesCount, offers, activeCity, citiesList, card, sortType, user, onPlaceCardClick, onCityClick, onPlaceCardMouseOver, onPlaceCardMouseLeave} = props;
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

Main.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  activeCity: PropTypes.object.isRequired,
  citiesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  card: PropTypes.number.isRequired,
  sortType: PropTypes.string.isRequired,
  user: PropTypes.shape({
    'avatar_url': PropTypes.string.isRequired,
    'email': PropTypes.string.isRequired,
    'id': PropTypes.number.isRequired,
    'is_pro': PropTypes.bool.isRequired,
    'name': PropTypes.string.isRequired
  }),
  onPlaceCardClick: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onPlaceCardMouseOver: PropTypes.func,
  onPlaceCardMouseLeave: PropTypes.func
};

export default Main;
