import React, {memo} from 'react';
import PropTypes from 'prop-types';

const CitiesList = memo(function CitiesList(props) {
  const {
    citiesList,
    activeCity,
    onCityClick
  } = props;

  return (
    <ul className="locations__list tabs__list">
      {citiesList.map((city, index) => {
        return (
          <li key={`${city.name}-${index}`} className="locations__item" onClick={() => onCityClick(city)}>
            <a className={`locations__item-link tabs__item${activeCity.name === city.name ? ` tabs__item--active` : ``}`}>
              <span>{city.name}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
});

CitiesList.propTypes = {
  citiesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeCity: PropTypes.object.isRequired,
  onCityClick: PropTypes.func.isRequired
};

export default CitiesList;

