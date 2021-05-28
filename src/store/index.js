import {createStore,combineReducers, applyMiddleware} from 'redux';
import UsersReducers from './reducers/UsersReducers';
import thunkMiddleware from 'redux-thunk';
import apiUsersReducers from './reducers/apiUsersReducers';
const rootReducers = combineReducers({
    users:UsersReducers,
    api:apiUsersReducers
})
const store = createStore(rootReducers,applyMiddleware(thunkMiddleware));

export default store;