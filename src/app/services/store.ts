import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import registerReducer from '../features/auth/signUpSlice'
import {api} from '../services/auth'
export const store = configureStore({
  reducer: {
    [api.reducerPath]:api.reducer,
    auth:authReducer,
    register:registerReducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch