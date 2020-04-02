import {extend} from '../../utils';
import {SortTypeList} from '../../types';

const initialState = {
  city: {},
  card: null,
  isSortListOpened: false,
  sortType: SortTypeList.POPULAR,
  isRequestSuccess: true
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_CARD: `CHANGE_CARD`,
  TOGGLE_SORT_LIST: `TOGGLE_SORT_LIST`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_REQUEST_STATUS: `CHANGE_REQUEST_STATUS`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeCard: (id) => ({
    type: ActionType.CHANGE_CARD,
    payload: id
  }),
  toggleSortList: (isSortListOpened) => ({
    type: ActionType.TOGGLE_SORT_LIST,
    payload: isSortListOpened
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType
  }),
  changeRequestStatus: (status) => ({
    type: ActionType.CHANGE_REQUEST_STATUS,
    payload: status
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});
    case ActionType.TOGGLE_SORT_LIST:
      return extend(state, {isSortListOpened: !action.payload});
    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {sortType: action.payload});
    case ActionType.CHANGE_CARD:
      return extend(state, {card: action.payload});
    case ActionType.CHANGE_REQUEST_STATUS:
      return extend(state, {isRequestSuccess: action.payload});
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
