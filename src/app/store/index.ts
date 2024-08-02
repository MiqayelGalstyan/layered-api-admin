import { Action, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import {
  createTransform,
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  Transform,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlice } from '@modules/auth';
import { AuthPartial, AuthState } from '@modules/auth/types/auth.type';
import { authApi } from '@modules/auth/api/auth.api';
import { profileApi } from '@modules/profile';
import { googlePlaceApi } from '@modules/googlePlace';




const rootReducer = combineReducers({
  auth: authSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
  [googlePlaceApi.reducerPath]: googlePlaceApi.reducer,
});

// Create AuthTransform
const AuthTransform: Transform<AuthState, AuthPartial> = createTransform(
  (inboundState: AuthState) => ({
    token: inboundState.token,
    refreshToken: inboundState.refreshToken,
    isAuthenticated: inboundState.isAuthenticated,
    user: inboundState.user,
  }),
  (outboundState: AuthPartial) => ({
    token: outboundState.token,
    refreshToken: outboundState.refreshToken,
    isAuthenticated: outboundState.isAuthenticated,
    user: outboundState.user,
  }),
  { whitelist: ['auth'] },
);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
  transforms: [AuthTransform],
};

const persistedReducer = persistReducer<RootState, Action>(
  persistConfig,
  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      authApi.middleware,
      profileApi.middleware,
      googlePlaceApi.middleware,
    ),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
