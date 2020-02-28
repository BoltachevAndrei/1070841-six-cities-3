import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {ActionCreator, SortTypeList} from '../../reducer.js';

const PlacesSorting = (props) => {
  const {isSortListOpened, sortType, toggleSortList, changeSortType} = props;
  const isOpenedClass = isSortListOpened ? `places__options--opened` : ``;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={() => toggleSortList(isSortListOpened)}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpenedClass}`}>
        {Array.from(Object.values(SortTypeList)).map((element, index) =>
          <li
            key={`${element}-${index}`}
            className={`places__option${element === sortType ? ` places__option--active` : ``}`}
            tabIndex="0"
            onClick={() => {
              changeSortType(element);
              toggleSortList(isSortListOpened);
            }}
          >
            {element}
          </li>
        )}
      </ul>
    </form>
  );
};

const mapStateToProps = (state) => ({
  isSortListOpened: state.isSortListOpened,
  sortType: state.sortType
});

const mapDispatchToProps = (dispatch) => ({
  toggleSortList(isSortListOpened) {
    dispatch(ActionCreator.toggleSortList(isSortListOpened));
  },
  changeSortType(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  }
});

PlacesSorting.propTypes = {
  isSortListOpened: PropTypes.bool.isRequired,
  sortType: PropTypes.string.isRequired,
  toggleSortList: PropTypes.func.isRequired,
  changeSortType: PropTypes.func.isRequired
};

export {PlacesSorting};
export default connect(mapStateToProps, mapDispatchToProps)(PlacesSorting);
