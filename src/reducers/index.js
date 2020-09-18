import searchReducer from './search';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    searchReducer
});

export default allReducers;