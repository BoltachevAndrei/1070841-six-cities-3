import {reducer, ActionType} from './app-state';

const initialCity = `Test city`;

const initialSortType = `All`;

const initialCard = 555;

const initialToggle = false;

it(`Reducer should set city by given value`, () => {
  expect(reducer({
    city: initialCity
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Moscow`
  })).toEqual({
    city: `Moscow`
  });

  expect(reducer({
    city: initialCity
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Tokyo`
  })).toEqual({
    city: `Tokyo`
  });
});

it(`Reducer should set sort type by given value`, () => {
  expect(reducer({
    sortType: initialSortType
  }, {
    type: ActionType.CHANGE_SORT_TYPE,
    payload: `LOW_TO_HIGH`
  })).toEqual({
    sortType: `LOW_TO_HIGH`
  });

  expect(reducer({
    sortType: initialSortType
  }, {
    type: ActionType.CHANGE_SORT_TYPE,
    payload: `HIGH_TO_LOW`
  })).toEqual({
    sortType: `HIGH_TO_LOW`
  });
});

it(`Reducer should set card by given value`, () => {
  expect(reducer({
    card: initialCard
  }, {
    type: ActionType.CHANGE_CARD,
    payload: `123`
  })).toEqual({
    card: `123`
  });

  expect(reducer({
    card: initialCard
  }, {
    type: ActionType.CHANGE_CARD,
    payload: `234`
  })).toEqual({
    card: `234`
  });
});

it(`Reducer should toggle sort list by given value`, () => {
  expect(reducer({
    isSortListOpened: initialToggle
  }, {
    type: ActionType.TOGGLE_SORT_LIST,
    payload: initialToggle
  })).toEqual({
    isSortListOpened: !initialToggle
  });
});

it(`Reducer should change request status by given value`, () => {
  expect(reducer({
    isRequestSuccess: false
  }, {
    type: ActionType.CHANGE_REQUEST_STATUS,
    payload: true
  })).toEqual({
    isRequestSuccess: true
  });
});
