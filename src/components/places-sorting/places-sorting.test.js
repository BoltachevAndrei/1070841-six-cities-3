import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import PlacesSorting from './places-sorting.jsx';

const mockStore = configureStore([]);

const isSortListOpened = false;

const sortType = `Popular`;

it(`PlacesSorting renders correctly`, () => {
  const store = mockStore({
    APP_STATE: {
      isSortListOpened,
      sortType
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <PlacesSorting
            toggleSortList={() => {}}
            changeSortType={() => {}}
          />
        </Provider>
    )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
