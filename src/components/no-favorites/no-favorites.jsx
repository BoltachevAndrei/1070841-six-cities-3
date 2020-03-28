import React from 'react';
import PropTypes from 'prop-types';
import HomeLink from '../home-link/home-link.jsx';
import ProfileLink from '../profile-link/profile-link.jsx';

const NoFavorites = (props) => {
  const {user} = props;

  return (
    <div className="page page--favorites-empty">
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

      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

NoFavorites.propTypes = {
  user: PropTypes.shape({
    'avatar_url': PropTypes.string.isRequired,
    'email': PropTypes.string.isRequired,
    'id': PropTypes.number.isRequired,
    'is_pro': PropTypes.bool.isRequired,
    'name': PropTypes.string.isRequired
  })
};

export default NoFavorites;
