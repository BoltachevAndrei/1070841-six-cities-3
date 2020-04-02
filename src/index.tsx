import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer/reducer';
import {ActionCreator as AppActionCreator} from './reducer/app-state/app-state';
import {Operation as DataOperation} from './reducer/data/data';
import {ActionCreator as UserActionCreator, Operation as UserOperation, AuthorizationStatus} from './reducer/user/user';
import {createAPI} from './api';
import history from './history';
import NameSpace from './reducer/name-space';
import App from './components/app/app';

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.changeAutorizationStatus(AuthorizationStatus.NO_AUTH));
  store.dispatch(UserActionCreator.changeUserData(null));
  store.dispatch(AppActionCreator.changeCard(null));
};

const setFalseRequestStatus = () => store.dispatch(AppActionCreator.changeRequestStatus(false));

const api = createAPI(onUnauthorized, history, setFalseRequestStatus);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadOffers())
  .then(() => store.dispatch(AppActionCreator.changeCity(store.getState()[NameSpace.DATA].offers[0].city)))
  .then(() => store.dispatch(UserOperation.checkAuth()))
  .then(() => store.dispatch(DataOperation.loadFavorites()))
  .then(() => store.dispatch(AppActionCreator.changeRequestStatus(true)));

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById(`root`)
);
