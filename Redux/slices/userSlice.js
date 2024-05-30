import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


const initialState = {
  updateUserLoading: false,
  updateUserMessage: '',
  user: null,
  userLoading: false,
  userError: '',
  showChangesAlert: false,
}

export const updateUser = createAsyncThunk('user/updateUser', async (user) => {
  const response = await fetch('/api/auth/updateUser', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  const data = await response.json()
  return data
})

export const fetchUser = createAsyncThunk('user/fetchuser', async()=>{
  const response = await fetch('/api/auth/getUser', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleChangesModal: (state, action) => {
      state.showChangesAlert = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateUser.pending, (state) => {
      state.updateUserLoading = true
      state.showChangesAlert = false
    })
    builder.addCase(updateUser.fulfilled, (state, action) => {
      console.log(action.payload)
      state.updateUserLoading = false
      state.showChangesAlert = true
      state.user = action.payload.data
      state.updateUserMessage = 'Your changes have been successfully saved!'
    })
    builder.addCase(updateUser.rejected, (state) => {
      state.updateUserLoading = false
      state.updateUserMessage =
        'There was an error saving your changes, please try again later!!!'
      state.showChangesAlert = false
    })
    builder.addCase(fetchUser.pending, (state) => {
      state.userLoading = true
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.userLoading = false
      state.user = action.payload?.data
    })
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.userLoading = false
      state.userError = action.payload
    })
  },
})
export default userSlice.reducer;
export const {toggleChangesModal} = userSlice.actions;