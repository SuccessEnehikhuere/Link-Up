import { configureStore } from "@reduxjs/toolkit";
import alertReducer from '../slices/copyLinkAlertSlice'
import  AuthReducer from '../slices/authSlice'
import helperReducer from '../slices/helperSlice'
import userReducer from '../slices/userSlice'


const store = configureStore({
  reducer: {
   alert: alertReducer,
   auth: AuthReducer,
   helper: helperReducer,
   user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['auth/register', 'auth/login'],
      },
    }),
})


export default store