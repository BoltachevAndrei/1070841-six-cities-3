import React, {Fragment} from 'react';
import HomeLink from '../home-link/home-link.jsx';
import ProfileLink from '../profile-link/profile-link.jsx';

const Error = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <HomeLink />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <ProfileLink />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main">
        <div className="container">
          <section className="error">
            <h1 className="visually-hidden">Error</h1>
            <div
              style={{
                'width': `420px`,
                'margin-top': `16.7vh`,
                'margin-right': `auto`,
                'margin-left': `auto`,
                'padding-top': `94px`,
                'text-align': `center`,
              }}
            >
              <b className="favorites__status">Error</b>
              <p className="favorites__status-description">Something went wrong.</p>
              <p className="favorites__status-description">Please try again later.</p>
            </div>
          </section>
        </div>
      </main>
    </Fragment>
  );
};

export default Error;
