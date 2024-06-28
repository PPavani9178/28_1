import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import actionTypeLogger from './middleware/actionTypeLogger';
import payloadLogger from './middleware/payloadLogger';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(actionTypeLogger, payloadLogger),
});

export default store;