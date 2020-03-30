import * as React from 'react';
import {City} from '../../types';

interface Props {
  citiesList: Array<City>;
  activeCity: City;
  onCityClick: (city: City) => void;
}

const CitiesList: React.FunctionComponent<Props> = React.memo(function CitiesList(props: Props) {
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

export default CitiesList;
