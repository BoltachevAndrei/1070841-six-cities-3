import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer/reducer.js';
import {ActionCreator} from './reducer/app-state/app-state.js';
import {Operation as DataOperation} from './reducer/data/data.js';
import {Operation as UserOperation, AuthorizationStatus} from './reducer/user/user.js';
import {createAPI} from './api.js';
import App from './components/app/app.jsx';

const onUnauthorized = () => store.dispatch(ActionCreator.changeAutorizationStatus(AuthorizationStatus.NO_AUTH));

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataOperation.loadOffers())
  .then(() => store.dispatch(ActionCreator.changeCity(store.getState().DATA.offers[0].city)))
  .then(() => store.dispatch(UserOperation.login({email: `Oliver.conner@gmail.com`, password: 2}))
  .then(() => store.dispatch(UserOperation.checkAuth()))
  .then(() => store.dispatch(DataOperation.loadFavorites())));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
