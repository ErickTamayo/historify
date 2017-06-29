import { combineReducers } from 'redux';
import profile from './profile';
import media from './media';

const historifyApp = combineReducers({
  profile,
  media,
})

export default historifyApp;