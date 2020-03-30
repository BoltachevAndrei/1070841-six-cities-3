import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import PlacesSorting from './places-sorting';
import {doNothing} from '../../utils';

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
            toggleSortList={doNothing}
            changeSortType={doNothing}
          />
        </Provider>
    )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
