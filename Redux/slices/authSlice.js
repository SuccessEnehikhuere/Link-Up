import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from 'react-hot-toast'
import { signIn } from 'next-auth/react'
import { trusted } from "mongoose";


const initialState = {
  isAuth: false,
  isLoading: false,
  user: {},
  registrationLoading: false,
  registrationError: '',
  loginLoading: false,
  loginError: '',
};

export const loginUser = createAsyncThunk('auth/login', async (payload, thunkApi)=>{
  try {
   const response = await signIn('credentials', {
    redirect: false,
    email: payload.email,
    password: payload.password,
   }) ;

   if(response.error){
    //reject the promise with the rejectWithValue
    return thunkApi.rejectWithValue(response.error);
   } else{
    //retrun the successful response
    return response;
   }
  } catch (error) {
    //handle other errors
    throw error;
  }
})


export const registerUser = createAsyncThunk('auth/register', async (user)=>{
  const response = await fetch('api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await response.json()
  return data;
});


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
   builder.addCase(loginUser.pending, (state)=>{
    state.loginLoading = true;
   });

   builder.addCase(loginUser.fulfilled, (state, action)=>{
    state.loginLoading = false;
    state.isAuth = true;
    toast.success('Login successful');
    state.user = action.payload;
    window.location.href = '/dashboard?page=links';
   });

    builder.addCase(loginUser.rejected, (state, action)=>{
      console.log(action.payload)
      state.loginLoading = false;
      state.isAuth = false;
      state.user = {};
      toast.error(action.payload);
    });

    builder.addCase(registerUser.pending, (state)=>{
      state.registrationLoading = true;
    });

    builder.addCase(registerUser.fulfilled, (state)=>{
      state.registrationLoading = false;
      toast.success('Registration successful!');
      window.location.href = '/login';
    });

    builder.addCase(registerUser.rejected, (state, action)=>{
      state.registrationLoading = false;
      toast.error(action.payload?.message);
    });
  }
})

export const {} = authSlice.actions;
export default authSlice.reducer;