import { combineReducers } from 'redux';
import browse from './browse';
import item from './item';
import favorites from './favorites';

export default combineReducers({
    browse,
    item,
    favorites
});
