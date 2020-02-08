import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

Enzyme.configure({
  adapter: new Adapter()
});

const placesCountTest = 111;

const placesNamesTest = [
  `Small village house`,
  `Studio apartment`,
  `2 stage apartment`
];

it(`Should locations item be pressed`, () => {
  const onLocationsItemClick = jest.fn();
  const main = shallow(
      <Main
        placesCount={placesCountTest}
        placesNames={placesNamesTest}
        onLocationsItemClick={onLocationsItemClick}
      />
  );
  const locationsItems = main.find(`.place-card__name`);
  locationsItems.forEach((locationsItem) => {
    locationsItem.props().onClick();
  });
  expect(onLocationsItemClick.mock.calls.length).toBe(locationsItems.length);
});
