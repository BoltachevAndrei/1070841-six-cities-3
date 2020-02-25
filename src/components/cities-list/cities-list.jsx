import React from 'react';
import PropTypes from 'prop-types';
import {getCities} from '../../utils.js';

const CitiesList = (props) => {
  const {offers, activeCity} = props;
  const cities = getCities(offers);
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, index) => {
        return (
          <li key={`${city}-${index}`} className="locations__item">
            <a className={`locations__item-link tabs__item${activeCity === city ? ` tabs__item--active` : ``}`} href="#">
              <span>{city}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

CitiesList.propTypes = {
  offers: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired
};

export default CitiesList;
