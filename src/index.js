import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const NUMBER_OF_PLACES_TO_STAY = 777;

const PLACES_TO_STAY_NAMES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

ReactDOM.render(
    <App
      placesCount={NUMBER_OF_PLACES_TO_STAY}
      placesNames={PLACES_TO_STAY_NAMES}
    />,
    document.getElementById(`root`)
);
