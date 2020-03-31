import * as React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/app-state/app-state';
import {SortTypeList} from '../../types';

interface Props {
  isSortListOpened: boolean;
  sortType: SortTypeList;
  toggleSortList: (isSortListOpened: boolean) => void;
  changeSortType: (sortType: SortTypeList) => void;
}

const PlacesSorting: React.FunctionComponent<Props> = (props: Props) => {
  const {
    isSortListOpened,
    sortType,
    toggleSortList,
    changeSortType
  } = props;

  const isOpenedClass = isSortListOpened ? `places__options--opened` : ``;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => toggleSortList(isSortListOpened)}>
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
            tabIndex={0}
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
  isSortListOpened: state.APP_STATE.isSortListOpened,
  sortType: state.APP_STATE.sortType
});

const mapDispatchToProps = (dispatch) => ({
  toggleSortList(isSortListOpened) {
    dispatch(ActionCreator.toggleSortList(isSortListOpened));
  },
  changeSortType(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  }
});

export {PlacesSorting};
export default connect(mapStateToProps, mapDispatchToProps)(PlacesSorting);
