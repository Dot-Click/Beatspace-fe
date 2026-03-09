import { combineReducers } from 'redux';
import authReducer from './authReducer';
import adminReducer from './adminReducer';
import beatReducer from './beatReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  admin: adminReducer,
  beat: beatReducer,
  // Add other reducers here as needed
});

export default rootReducer;

