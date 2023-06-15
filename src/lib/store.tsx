import {
  configureStore,
  isRejectedWithValue,
  Middleware,
} from '@reduxjs/toolkit';
import { authReducer } from '../screens/Auth/auth.slice';
import { authApi } from '../services/modules/auth.api';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { removeStorageData } from './asyncStorage';
import { userApi } from '../services/modules/user.api';
import { groupApi } from '../services/modules/group.api';
import { eventReducer } from '../screens/Events/events.slice';
import { eventApi } from '../services/modules/event.api';

export const ErrorLoggerMiddleware: Middleware = () => next => action => {
  if (isRejectedWithValue(action)) {
    const { data } = action?.payload ?? { data: { message: '' } };
    if (data?.statusCode === 401) {
      removeStorageData('token');
    }
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Something went wrong.',
    });
  }

  return next(action);
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    event: eventReducer,
    [eventApi.reducerPath]: eventApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [groupApi.reducerPath]: groupApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      authApi.middleware,
      userApi.middleware,
      groupApi.middleware,
      eventApi.middleware,
      ErrorLoggerMiddleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
