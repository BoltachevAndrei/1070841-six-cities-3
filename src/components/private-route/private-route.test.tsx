import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import history from '../../history';
import {AuthorizationStatus} from '../../types';
import PrivateRoute from './private-route';

const mockStore = configureStore([]);

const render = () => <div>Private route</div>;

it(`PrivateRoute with authorization renders Private route`, () => {
  const store = mockStore({
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <PrivateRoute
              render={render}
            />
          </Router>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it(`PrivateRoute with no authorization renders nothing`, () => {
  const store = mockStore({
    USER: {
      authorizationStatus: AuthorizationStatus.NO_AUTH
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <PrivateRoute
              render={render}
            />
          </Router>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
