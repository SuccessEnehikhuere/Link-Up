import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from 'react-hot-toast'
import axios from "axios";

const initialState = {
  noOfLinks: 0,
  theme:'light',
  activateSaveBtn: false,
  allLinks: [],
  newLinks: [],
  saveLinksLoading: false,
  saveLinksMessage: '',
  fetchLinksLoading: false,
  fetchLinksError: '',
  showAddLinkModal: false,
  updatingLink: false,
  deleteLinkError:null,
  deletingLink: false,
}


export const deleteLinkWithId = createAsyncThunk('link/deleteLink', async(id)=>{
  const {data} = await axios.post(`/api/auth/deleteLink`, {id});
  return data;
})

//a function to save links to the database
export const saveLinksToDb = createAsyncThunk('/link/saveLink', async(links)=>{
  const {data} = await axios.post(`/api/auth/saveLink`, {links});
  return data;
})


export const fetchLinksFromDb = createAsyncThunk('link/fetchLinks', async(thunkApi) => {
  const {user} = thunkApi.getState().user;
  const {data} = await axios.post(`/api/auth/getLinks`, {user});
  return data;
})

export const helperSlice = createSlice({
  name:'helper',
  initialState,
  reducers: {
    toggleTheme: (state, action)=>{
      state.theme = action.payload
    },
    increaseLinks: (state, action)=>{
      if(state.newLinks === 2) {
        return
      }

      const obj = {
        user : action.payload,
        name: '',
        value: '',
        color: '',
        address: '',
      };
      console.log(obj)
      state.newLinks.unshift(obj);
    },
    removeLink: (state, action)=>{
      state.noOfLinks -= 1;
      state.newLinks = state.newLinks.filter((link)=>link.id !== action.payload);
    },

    toggleActivateSaveBtn: (state, action)=>{
      state.activateSaveBtn = action.payload
    },
    
    saveLinks: (state)=>{
      // a function to add the new links to the allLinks array
      (state.allLinks = [...state.newLinks, ...state.allLinks]),
        (state.newLinks = []),
        (state.activateSaveBtn = false)
    },

    updateLink: (state, action)=>{
      // a function to update the details of the new links in the newLinks array
      const {id, name, label, color, address} = action.payload;
      const link = state.newLinks.find((link)=> link.id === id)
      if(!link) return;
      link.name = name;
      link.color = color;
      link.address = address;  
    },

    toggleUpdateLink: (state, action)=>{
      state.updatingLink = action.payload;
    },

    toggleAddLinkModal: (state, action)=>{
      if(state.showAddLinkModal){
        state.showAddLinkModal = false
      }
      state.showAddLinkModal = action.payload;
    },
  },
  extraReducers: (builder)=>{
    builder.addCase(saveLinksToDb.pending, (state, action)=>{
      state.saveLinksLoading = true;
    });
    builder.addCase(saveLinksToDb.fulfilled, (state, action)=>{
      state.saveLinksLoading = false;
      state.saveLinksError = false;
      state.newLinks = [];
      state.allLinks = [...action.payload.data, ...state.allLinks ];
      state.activateSaveBtn = false;
      state.showAddLinkModal = true;
      state.saveLinksMessage = `your social link${action.payload.data.length > 1 ? 's' : ''} was saved successfully`
    });
    builder.addCase(saveLinksToDb.rejected, (state, action)=>{
     state.saveLinksLoading = false;
     state.saveLinksMessage =
       'An error occurred while saving your links. Please try again later'
     toast.error(action.payload.message);
    });
    builder.addCase(fetchLinksFromDb.pending, (state)=>{
      state.fetchLinksLoading = true;
    });
     builder.addCase(fetchLinksFromDb.fulfilled, (state, action) => {
       state.fetchLinksLoading = false;
       state.fetchLinksError = false
       state.allLinks = action?.payload?.data;
     });
     builder.addCase(fetchLinksFromDb.rejected, (state, action) => {
       state.fetchLinksLoading = false
       state.fetchLinksError =
         'An error occurred while fetching your links. Please try again later'
     });
     builder.addCase(deleteLinkWithId.pending, (state, action)=>{
      state.deletingLink = true;
     });
     builder.addCase(deleteLinkWithId.fulfilled, (state, action)=>{
      state.deletingLink = false;
      state.deleteLinkError = null;
      state.allLinks = state.allLinks.filter((link)=>link._id !== action.payload.data);
      toast.success('link deleted successfully')
     });
     builder.addCase(deleteLinkWithId.rejected, (state, action)=>{
      state.deletingLink = false;
      state.deleteLinkError = action.payload?.message;
     })
  }
})

export const { toggleTheme, increaseLinks, removeLink, toggleActivateSaveBtn, saveLinks, updateLink, toggleUpdateLink, toggleAddLinkModal,
} = helperSlice.actions
export default helperSlice.reducer