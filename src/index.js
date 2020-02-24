import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducer.js';
import App from './components/app/app.jsx';

const store = createStore(reducer);

const numberOfPlacesToStay = (store.getState().offers).filter((element) => element.city === store.getState().city).length;

const offers = store.getState().offers;

const activeCity = store.getState().city;

ReactDOM.render(
    <Provider store={store}>
      <App
        placesCount={numberOfPlacesToStay}
        activeCity={activeCity}
        offers={offers}
      />
    </Provider>,
    document.getElementById(`root`)
);
