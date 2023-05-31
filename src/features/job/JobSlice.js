import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';
import { getUserFromLocalStorage } from '../../utils/localStorage';
import userSlice from '../user/userSlice';

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
  async (job,thunkAPI)=>{
    
  }
)



const jobSlice = createSlice({
    name:'job',
    initialState,
    reducers:{

      //this function takes the change values from the user input
      handleChange:(state,{payload:{name,value}})=>{
        state[name] =value
      },
      //this function is used to clear values from the form and reset it to default
      clearValues: ()=>{
        return initialState
      }
    }
});




export const { handleChange, clearValues } = jobSlice.actions;

export default jobSlice.reducer;