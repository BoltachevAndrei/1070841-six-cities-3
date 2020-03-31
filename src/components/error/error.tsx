import * as React from 'react';
import HomeLink from '../home-link/home-link';
import ProfileLink from '../profile-link/profile-link';

const Error: React.FunctionComponent = () => {
  return (
    <React.Fragment>
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
                'marginTop': `16.7vh`,
                'marginRight': `auto`,
                'marginLeft': `auto`,
                'paddingTop': `94px`,
                'textAlign': `center`,
              }}
            >
              <b className="favorites__status">Error</b>
              <p className="favorites__status-description">Something went wrong.</p>
              <p className="favorites__status-description">Please try again later.</p>
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Error;
