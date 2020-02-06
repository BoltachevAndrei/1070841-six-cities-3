import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

const NUMBER_OF_PLACES_TO_STAY = 777;

ReactDOM.render(
    <App places={NUMBER_OF_PLACES_TO_STAY} />,
    document.getElementById(`root`)
);
