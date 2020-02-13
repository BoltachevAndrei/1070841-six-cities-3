import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const onPlaceCardClick = () => {};

const App = (props) => {
  return (
    <Main
      placesCount={props.placesCount}
      offers={props.offers}
      onPlaceCardClick={onPlaceCardClick}
    />
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
};

export default App;
