import * as React from 'react';
import HomeLink from '../home-link/home-link';
import ProfileLink from '../profile-link/profile-link';
import {User} from '../../types';

interface Props {
  user: User;
  onHomeLinkClick: () => void;
}

const NoFavorites: React.FunctionComponent<Props> = (props: Props) => {
  const {
    user,
    onHomeLinkClick
  } = props;

  return (
    <div className="page page--favorites-empty">
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
        <HomeLink
          homeLinkClass="footer"
          height="33"
          width="64"
          onHomeLinkClick={onHomeLinkClick}
        />
      </footer>
    </div>
  );
};

export default NoFavorites;
