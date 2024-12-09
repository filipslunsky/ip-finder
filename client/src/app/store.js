import { combineReducers, configureStore } from '@reduxjs/toolkit';
import locationReducer from '../features/location/state/slice';

const appReducer = combineReducers({
     location: locationReducer,
});

const store = configureStore({
    reducer: appReducer
});

export default store;