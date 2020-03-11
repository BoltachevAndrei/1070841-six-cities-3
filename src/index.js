import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer/reducer.js';
import {Operation as DataOperation} from './reducer/data/data.js';
import {ActionCreator} from './reducer/app-state/app-state.js';
import {createAPI} from './api.js';
import App from './components/app/app.jsx';

const api = createAPI(() => {});

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataOperation.loadOffers()).then(() => store.dispatch(ActionCreator.changeCity(store.getState().DATA.offers[0].city)));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
