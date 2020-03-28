import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer/reducer.js';
import {ActionCreator as AppActionCreator} from './reducer/app-state/app-state.js';
import {ActionCreator as UserActionCreator} from './reducer/user/user.js';
import {Operation as DataOperation} from './reducer/data/data.js';
import {Operation as UserOperation, AuthorizationStatus} from './reducer/user/user.js';
import {createAPI} from './api.js';
import history from './history.js';
import App from './components/app/app.jsx';

const onUnauthorized = () => store.dispatch(UserActionCreator.changeAutorizationStatus(AuthorizationStatus.NO_AUTH));

const setFalseRequestStatus = () => store.dispatch(AppActionCreator.changeRequestStatus(false));

const api = createAPI(onUnauthorized, history, setFalseRequestStatus);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataOperation.loadOffers())
  .then(() => store.dispatch(AppActionCreator.changeCity(store.getState().DATA.offers[0].city)))
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
