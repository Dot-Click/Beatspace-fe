import { combineReducers } from 'redux';
import authReducer from './authReducer';
import adminReducer from './adminReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  admin: adminReducer,
  // Add other reducers here as needed
});

export default rootReducer;

