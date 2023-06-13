import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';
import { getUserFromStorage } from '../../utils/localStorage';
import userSlice, { logoutUser } from '../user/userSlice';
import { showLoading,hideLoading,getAllJobs } from '../alljobs/AlljobsSlice'; 


const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: '',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  isEditing: false,
  editJobId: '',
};


export const editJob = createAsyncThunk(
  'job/editJob',
  async({jobId,job}, thunkAPI)=>{
    try{
       const resp = customFetch.patch(`/jobs/${jobId}`,job,{
         headers:{
            authorization: `Bearer ${thunkAPI.getState().user.user.token}`
         }
       })
       return resp.data.msg
    }catch(error){
       return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }

)



export const deleteJob = createAsyncThunk(
  'job/deleteJob',
  async(jobId,thunkAPI)=>{
     thunkAPI.dispatch(showLoading())
     try{
       const resp = await customFetch.delete(`/jobs/${jobId}`,{
        headers:{
          authorization:`Bearer ${thunkAPI.getState().user.user.token}`
        }
       });
       thunkAPI.dispatch(getAllJobs());
       console.log(resp.data.msg)
       return resp.data.msg
     }catch (error){
       thunkAPI.dispatch(hideLoading());
       return thunkAPI.rejectWithValue(error.response.data.msg)
     }
  }
)


export const createJob = createAsyncThunk(
  'job/createJob',
  
  async (job,thunkAPI)=>{
  let url ='/jobs';
  
  try{
    const resp = await customFetch.post(url,job, {
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
        return {...initialState,
                    jobLocation: getUserFromStorage()?.location || ''}
      },

      setEditJob:(state,{payload})=>{
        return {...state,isEditing:true,...payload}
      }
    },
    extraReducers:{
      //createjob from the asyncTHunk
      [createJob.pending]: (state)=>{
        state.isLoading = true;
      },
      [createJob.fulfilled]: (state)=>{
        state.isLoading = false;
        toast.success('Job created')
      },
      [createJob.rejected]: (state,{payload})=>{
        state.isLoading = true;
        toast.error(payload)
        console.log(payload)
      },

      //delete reducers
      [deleteJob.rejected]:(state,{payload})=>{
        state.isLoading = false;
        toast.error(payload)
      },
      [deleteJob.fulfilled]:(state,{payload})=>{
        state.isLoading = false
        toast.success(payload)
      },

      //edit reducers
      [editJob.fulfilled]:(state,{payload})=>{
        state.isLoading =false;
        toast.success('Job modified');
      },
      [editJob.pending]:(state,{payload})=>{
        state.isLoading = true;
      },
      [editJob.rejected]:(state,{payload})=>{
        state.isLoading = true;
        toast.error(payload);
      }

    
      
    }
});




export const { handleChange, clearValues ,setEditJob} = jobSlice.actions;

export default jobSlice.reducer;