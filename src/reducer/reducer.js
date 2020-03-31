import {combineReducers} from 'redux';
import {reducer as appState} from './app-state/app-state';
import {reducer as data} from './data/data';
import {reducer as user} from './user/user';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.APP_STATE]: appState,
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user
});
