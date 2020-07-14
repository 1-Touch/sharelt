import { combineReducers } from 'redux';

// Reducers
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
