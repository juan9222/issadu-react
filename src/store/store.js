import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { routeReducer } from '../reducers/routeReducer';
import { onePiecePriceReducer } from '../reducers/onePieceReducer'
import thunk from 'redux-thunk'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
    route: routeReducer,
    onePiecePrice: onePiecePriceReducer
});

export const store = createStore(reducers, 
    composeEnhancers(applyMiddleware(thunk))
    );