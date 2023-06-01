import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';
import { getUserFromLocalStorage } from '../../utils/localStorage';
import userSlice, { logoutUser } from '../user/userSlice';

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending','diego'],
  status: 'pending',
  isEditing: false,
  editJobId: '',
};

export const createJob = createAsyncThunk(
  'job/createJob',
async(user,thunkAPI)=>{
  try{
    const resp = await customFetch.post('/jobs',user, {
      headers:{
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`
      }
    });
    thunkAPI.dispatch(clearValues());
    return resp.data
  } catch(error){ 
    if(error.response.status === 401){
       thunkAPI.dispatch(logoutUser());
       return thunkAPI.rejectWithValue('Unauthorized! Logging out');
    }
    //basic setup
    return thunkAPI.rejectWithValue(error.response.data.msg);  
  }
}
);



const jobSlice = createSlice({
    name:'job',
    initialState,
    reducers:{

      //this function takes the changed values from the user input
      handleChange:(state,{payload:{name,value}})=>{
        state[name] =value
      },
      //this function is used to clear values from the form and reset it to default
      clearValues: ()=>{
        return initialState
      },
    },
    extraReducers:{
      //createjob from the asyncTHunk
      [createJob.pending]: (state)=>{
        state.isLoading = true
      },
      [createJob.fulfilled]: (state)=>{
        state.isLoading = false
        toast.success('Job created')
      },
      [createJob.pending]: (state,payload)=>{
        state.isLoading = true
        toast.error(payload)
      }
    }
});




export const { handleChange, clearValues } = jobSlice.actions;

export default jobSlice.reducer;