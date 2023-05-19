import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {toast} from 'react-toastify'
import customFetch from '../../utils/axios';
import { addUserToLocalStorage, 
         getUserFromStorage,
         removeUserFromLocalStorage } from '../../utils/localStorage';

const initialState ={
    isLoading: false,
    isSidebarOpen:false,
    user:getUserFromStorage(),
    removeUserFromLocalStorage
}


export const registerUser = createAsyncThunk(
    'user/registerUser',
  async(user,thunkAPI)=>{
    try{
      const resp = await customFetch.post('/auth/register',user)
      //we are returning the user 
      return resp.data
    } catch(error){ 
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
 }
);


export const loginUser = createAsyncThunk(
    'user/loginUser',
  async(user,thunkAPI)=>{
    try{
      const resp = await customFetch.post('/auth/login',user)
      //we are returning the user 
      return resp.data
    } catch(error){
      
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
 }
)



const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers:{
      [registerUser.pending]:(state)=>{
        state.isLoading = true
      },
      //in this one we have to make sure we save the user info 
      [registerUser.fulfilled]:(state,{payload})=>{
        const {user} = payload
        state.isLoading = false
        addUserToLocalStorage(user);
        state.user = user
        toast.success(`Hello There ${user.name}`);
      },
      [registerUser.rejected]:(state,{payload})=>{
        state.isLoading = true;
        toast.error(payload)
      },
      [loginUser.pending]:(state)=>{
        state.isLoading = true
      },
      [loginUser.fulfilled]:(state,{payload})=>{
        const {user} = payload
        state.isLoading = false
        state.user = user
        addUserToLocalStorage(user);
        toast.success(`Welcome Back ${user.name}`);
      },
      [loginUser.rejected]:(state,{payload})=>{
        state.isLoading = true;
        toast.error(payload)
      },
    }
});

export default userSlice.reducer;