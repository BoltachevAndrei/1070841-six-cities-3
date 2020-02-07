import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  return (
    <Main
      placesCount={props.placesCount}
      placesNames={props.placesNames}
    />
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  placesNames: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
