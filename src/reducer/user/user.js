import {extend} from '../../utils';
import {AuthorizationStatus} from '../../types';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null
};

const ActionType = {
  CHANGE_AUTHORIZATION_STATUS: `CHANGE_AUTHORIZATION_STATUS`,
  CHANGE_USER_DATA: `CHANGE_USER_DATA`
};

const ActionCreator = {
  changeAutorizationStatus: (status) => {
    return {
      type: ActionType.CHANGE_AUTHORIZATION_STATUS,
      payload: status
    };
  },
  changeUserData: (user) => {
    return {
      type: ActionType.CHANGE_USER_DATA,
      payload: user
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_AUTHORIZATION_STATUS:
      return extend(state, {authorizationStatus: action.payload});
    case ActionType.CHANGE_USER_DATA:
      return extend(state, {user: action.payload});
  }
  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => dispatch(ActionCreator.changeUserData(response.data)))
      .then(() => dispatch(ActionCreator.changeAutorizationStatus(AuthorizationStatus.AUTH)))
      .catch((err) => {
        throw err;
      });
  },
  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password
    })
    .then((response) => dispatch(ActionCreator.changeUserData(response.data)))
    .then(() => dispatch(ActionCreator.changeAutorizationStatus(AuthorizationStatus.AUTH)));
  }
};

export {ActionCreator, ActionType, AuthorizationStatus, Operation, reducer};
