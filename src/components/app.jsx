import React from 'react';
import Main from './main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  return <Main places={props.places}/>;
};

export default App;
