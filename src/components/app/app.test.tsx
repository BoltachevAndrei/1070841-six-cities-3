import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {App} from './app';
import {Router} from 'react-router-dom';
import history from '../../history';
import {SortTypeList} from '../../types';
import {doNothing} from '../../utils';

jest.mock(`../map/map.tsx`);

const mockStore = configureStore([]);

const activeCity = {
  name: `Test city 2`,
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10
  }
};

const sortType = SortTypeList.POPULAR;

const card = 0;

const citiesList = [
  {
    name: `Test city 1`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    }
  },
  {
    name: `Test city 2`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    }
  },
  {
    name: `Test city 3`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    }
  },
  {
    name: `Test city 4`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    }
  }
];

const user = {
  avatar: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  isSuper: false,
  name: `Oliver.conner`
};

const offers = [
  {
    id: 778,
    city: {
      name: `Test city 2`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    isPremium: false,
    images: [
      `img/room.jpg`
    ],
    price: 80,
    isBookmarked: true,
    rating: 3,
    title: `Wood and stone place`,
    description: `Test description`,
    features: {
      entire: `Private room`,
      bedrooms: `33`,
      adults: `55`
    },
    goodsInside: [
      `MiniBar`
    ],
    host: {
      id: 1,
      name: `Ivan`,
      avatar: `img/avatar.svg`,
      isSuper: true
    },
    previewImage: `img/room.jpg`,
    coordinates: [
      52.370216,
      4.895168
    ],
    zoom: 12
  },
  {
    id: 779,
    city: {
      name: `Test city 3`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    isPremium: false,
    images: [
      `img/apartment-02.jpg`
    ],
    price: 132,
    isBookmarked: false,
    rating: 3,
    title: `Canal View Prinsengracht`,
    description: `Test description`,
    features: {
      entire: `Apartment`,
      bedrooms: `33`,
      adults: `55`
    },
    goodsInside: [
      `MiniBar`
    ],
    host: {
      id: 1,
      name: `Ivan`,
      avatar: `img/avatar.svg`,
      isSuper: true
    },
    previewImage: `img/apartment-02.jpg`,
    coordinates: [
      52.370216,
      4.895168
    ],
    zoom: 12
  },
  {
    id: 780,
    city: {
      name: `Test city 4`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    isPremium: false,
    images: [
      `img/apartment-03.jpg`
    ],
    price: 180,
    isBookmarked: false,
    rating: 3,
    title: `Nice, cozy, warm big bed apartment`,
    description: `Test description`,
    features: {
      entire: `Apartment`,
      bedrooms: `33`,
      adults: `55`
    },
    goodsInside: [
      `MiniBar`
    ],
    host: {
      id: 1,
      name: `Ivan`,
      avatar: `img/avatar.svg`,
      isSuper: true
    },
    previewImage: `img/apartment-03.jpg`,
    coordinates: [
      52.370216,
      4.895168
    ],
    zoom: 12
  },
];

const offersNearby = [
  {
    id: 779,
    city: {
      name: `Test city 3`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    isPremium: false,
    images: [
      `img/apartment-02.jpg`
    ],
    price: 132,
    isBookmarked: false,
    rating: 3,
    title: `Canal View Prinsengracht`,
    description: `Test description`,
    features: {
      entire: `Apartment`,
      bedrooms: `33`,
      adults: `55`
    },
    goodsInside: [
      `MiniBar`
    ],
    host: {
      id: 1,
      name: `Ivan`,
      avatar: `img/avatar.svg`,
      isSuper: true
    },
    previewImage: `img/apartment-02.jpg`,
    coordinates: [
      52.370216,
      4.895168
    ],
    zoom: 12
  },
  {
    id: 780,
    city: {
      name: `Test city 4`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    isPremium: false,
    images: [
      `img/apartment-03.jpg`
    ],
    price: 180,
    isBookmarked: false,
    rating: 3,
    title: `Nice, cozy, warm big bed apartment`,
    description: `Test description`,
    features: {
      entire: `Apartment`,
      bedrooms: `33`,
      adults: `55`
    },
    goodsInside: [
      `MiniBar`
    ],
    host: {
      id: 1,
      name: `Ivan`,
      avatar: `img/avatar.svg`,
      isSuper: true
    },
    previewImage: `img/apartment-03.jpg`,
    coordinates: [
      52.370216,
      4.895168
    ],
    zoom: 12
  }
];

const comments = [
  {
    id: 201,
    user: {
      id: 1,
      name: `Max`,
      avatar: `img/avatar-max.jpg`,
      isSuper: true
    },
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    rating: 3,
    date: new Date(`2019-04-24`)
  },
  {
    id: 202,
    user: {
      id: 1,
      name: `Max`,
      avatar: `img/avatar-max.jpg`,
      isSuper: true
    },
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    rating: 3,
    date: new Date(`2019-04-24`)
  },
  {
    id: 203,
    user: {
      id: 1,
      name: `Max`,
      avatar: `img/avatar-max.jpg`,
      isSuper: true
    },
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    rating: 3,
    date: new Date(`2019-04-24`)
  }
];

describe(`App renders correctly`, () => {
  it(`Main renders correctly`, () => {
    const store = mockStore({
      APP_STATE: {
        sortType,
        isSortListOpened: false
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <App
                offers={offers}
                offersByCity={offers}
                city={activeCity}
                citiesList={citiesList}
                card={card}
                sortType={sortType}
                user={user}
                onPlaceCardClick={doNothing}
                onCityClick={doNothing}
                onPlaceCardMouseOver={doNothing}
                onPlaceCardMouseLeave={doNothing}
                comments={comments}
                offersNearby={offersNearby}
                isPostingComment={false}
                authorizationStatus='AUTH'
                isRequestSuccess={true}
                onCommentSubmit={doNothing}
                onLoginSubmit={doNothing}
                toggleIsBookmarked={doNothing}
                onHomeLinkClick={doNothing}
              />
            </Router>
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Offer renders correctly`, () => {
    const store = mockStore({
      APP_STATE: {
        sortType,
        isSortListOpened: false
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <App
                offers={offers}
                offersByCity={offers}
                city={activeCity}
                citiesList={citiesList}
                card={card}
                sortType={sortType}
                user={user}
                onPlaceCardClick={doNothing}
                onCityClick={doNothing}
                onPlaceCardMouseOver={doNothing}
                onPlaceCardMouseLeave={doNothing}
                comments={comments}
                offersNearby={offersNearby}
                isPostingComment={false}
                authorizationStatus='AUTH'
                isRequestSuccess={true}
                onCommentSubmit={doNothing}
                onLoginSubmit={doNothing}
                toggleIsBookmarked={doNothing}
                onHomeLinkClick={doNothing}
              />
            </Router>
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Error renders correctly`, () => {
    const store = mockStore({
      APP_STATE: {
        sortType,
        isSortListOpened: false
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <App
                offers={offers}
                offersByCity={offers}
                city={activeCity}
                citiesList={citiesList}
                card={card}
                sortType={sortType}
                user={null}
                onPlaceCardClick={doNothing}
                onCityClick={doNothing}
                onPlaceCardMouseOver={doNothing}
                onPlaceCardMouseLeave={doNothing}
                comments={comments}
                offersNearby={offersNearby}
                isPostingComment={false}
                authorizationStatus='AUTH'
                isRequestSuccess={false}
                onCommentSubmit={doNothing}
                onLoginSubmit={doNothing}
                toggleIsBookmarked={doNothing}
                onHomeLinkClick={doNothing}
              />
            </Router>
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`NoFavorites renders correctly`, () => {
    const store = mockStore({
      APP_STATE: {
        sortType,
        isSortListOpened: false
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <App
                offers={[offers[1], offers[2]]}
                offersByCity={offers}
                city={activeCity}
                citiesList={citiesList}
                card={card}
                sortType={sortType}
                user={user}
                onPlaceCardClick={doNothing}
                onCityClick={doNothing}
                onPlaceCardMouseOver={doNothing}
                onPlaceCardMouseLeave={doNothing}
                comments={comments}
                offersNearby={offersNearby}
                isPostingComment={false}
                authorizationStatus='AUTH'
                isRequestSuccess={true}
                onCommentSubmit={doNothing}
                onLoginSubmit={doNothing}
                toggleIsBookmarked={doNothing}
                onHomeLinkClick={doNothing}
              />
            </Router>
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Favorites renders correctly`, () => {
    const store = mockStore({
      APP_STATE: {
        sortType,
        isSortListOpened: false
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <App
                offers={offers}
                offersByCity={offers}
                city={activeCity}
                citiesList={citiesList}
                card={card}
                sortType={sortType}
                user={user}
                onPlaceCardClick={doNothing}
                onCityClick={doNothing}
                onPlaceCardMouseOver={doNothing}
                onPlaceCardMouseLeave={doNothing}
                comments={comments}
                offersNearby={offersNearby}
                isPostingComment={false}
                authorizationStatus='AUTH'
                isRequestSuccess={true}
                onCommentSubmit={doNothing}
                onLoginSubmit={doNothing}
                toggleIsBookmarked={doNothing}
                onHomeLinkClick={doNothing}
              />
            </Router>
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
