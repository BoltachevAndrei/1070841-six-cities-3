import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {reducer, ActionType, AuthorizationStatus, Operation} from './user';

const api = createAPI(() => {});

it(`Reducer should change authentification status`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH
  },
  {
    type: ActionType.CHANGE_AUTHORIZATION_STATUS,
    payload: AuthorizationStatus.AUTH
  }))
  .toEqual({
    authorizationStatus: AuthorizationStatus.AUTH
  });
});

it(`Reducer should change user data`, () => {
  expect(reducer({
    user: null
  },
  {
    type: ActionType.CHANGE_USER_DATA,
    payload: {
      'avatar_url': `img/1.png`,
      'email': `Oliver.conner@gmail.com`,
      'id': 1,
      'is_pro': false,
      'name': `Oliver.conner`
    }
  }))
  .toEqual({
    user: {
      'avatar_url': `img/1.png`,
      'email': `Oliver.conner@gmail.com`,
      'id': 1,
      'is_pro': false,
      'name': `Oliver.conner`
    }
  });
});

it(`Operation.checkAuth work correctly`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const checkAuth = Operation.checkAuth();

  apiMock
    .onGet(`/login`)
    .reply(200, {
      'avatar_url': `img/1.png`,
      'email': `Oliver.conner@gmail.com`,
      'id': 1,
      'is_pro': false,
      'name': `Oliver.conner`
    });

  return checkAuth(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.CHANGE_USER_DATA,
        payload: {
          'avatar_url': `img/1.png`,
          'email': `Oliver.conner@gmail.com`,
          'id': 1,
          'is_pro': false,
          'name': `Oliver.conner`
        }
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.CHANGE_AUTHORIZATION_STATUS,
        payload: AuthorizationStatus.AUTH
      });
    });
});

it(`Operation.login work correctly`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const login = Operation.login({
    email: `Oliver.conner@gmail.com`,
    password: `12345678`
  });

  apiMock
    .onPost(`/login`)
    .reply(200, {
      'avatar_url': `img/1.png`,
      'email': `Oliver.conner@gmail.com`,
      'id': 1,
      'is_pro': false,
      'name': `Oliver.conner`
    });

  return login(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.CHANGE_USER_DATA,
        payload: {
          'avatar_url': `img/1.png`,
          'email': `Oliver.conner@gmail.com`,
          'id': 1,
          'is_pro': false,
          'name': `Oliver.conner`
        }
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.CHANGE_AUTHORIZATION_STATUS,
        payload: AuthorizationStatus.AUTH
      });
    });
});
