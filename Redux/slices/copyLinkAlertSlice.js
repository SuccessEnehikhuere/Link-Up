import { createSlice } from "@reduxjs/toolkit";


const initialState = ({
  showLinkAlert : false,
})


const alertSlice = createSlice({
  name: 'showLinkAlertSlice',
  initialState,
  reducers: {
    toggleShowLink: (state, action) => {
      if(state.showLinkAlert){
        state.showLinkAlert = false;
      }
      state.showLinkAlert = action.payload
    },
  },
})



export default alertSlice.reducer;
export const {toggleShowLink} = alertSlice.actions