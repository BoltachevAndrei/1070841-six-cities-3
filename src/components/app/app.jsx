import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const onLocationsItemClick = () => {};

const App = (props) => {
  return (
    <Main
      placesCount={props.placesCount}
      placesNames={props.placesNames}
      onLocationsItemClick={onLocationsItemClick}
    />
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  placesNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
