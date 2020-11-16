import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { routeReducer } from '../reducers/routeReducer';
import thunk from 'redux-thunk'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
    route: routeReducer,
});

export const store = createStore(reducers, 
    composeEnhancers(applyMiddleware(thunk))
    );