import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {OFFERS_MOCK} from './mocks/offers.js';

const NUMBER_OF_PLACES_TO_STAY = 777;

ReactDOM.render(
    <App
      placesCount={NUMBER_OF_PLACES_TO_STAY}
      offers={OFFERS_MOCK}
    />,
    document.getElementById(`root`)
);
