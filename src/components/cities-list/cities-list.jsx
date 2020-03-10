import React, {memo} from 'react';
import PropTypes from 'prop-types';

const CitiesList = memo(function CitiesList(props) {
  const {citiesList, activeCity, onCityClick} = props;
  return (
    <ul className="locations__list tabs__list">
      {citiesList.map((city, index) => {
        return (
          <li key={`${city}-${index}`} className="locations__item" onClick={() => onCityClick(city)}>
            <a className={`locations__item-link tabs__item${activeCity === city ? ` tabs__item--active` : ``}`} href="#">
              <span>{city}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
});

CitiesList.propTypes = {
  citiesList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired
};

export default CitiesList;

