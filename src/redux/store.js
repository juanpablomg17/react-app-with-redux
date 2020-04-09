import {createStore, combineReducers} from 'redux';
import results from './reducers/results';
import sugestions from './reducers/sugestions';
import currenItem from './reducers/currentItem';

const reducer = combineReducers({

    results,
    sugestions,
    currenItem,


});

const store = createStore(reducer);

export default store;