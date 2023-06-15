import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {toast} from 'react-toastify'
import customFetch from '../../utils/axios';


const initialFilterState ={
    search:'',
    searchStatus:'all',
    searchType: 'all',
    sort: 'latest',
    sortOptions:['latest','oldest','a-z','z-a']
}

const initialState ={
    isLoading: false,
    jobs: [],
    totalJobs:0,
    numOfPages:1,
    page:1,
    stats:{},
    monthlyApplication: [],
    ...initialFilterState
}



export const getAllJobs = createAsyncThunk('allJobs/getJobs',async(_,thunkAPI)=>{

    let url = '/jobs';

    try{
       const resp = await customFetch.get(url,{
        headers:{
            Authorization:`Bearer ${thunkAPI.getState().user.user.token}`
        }
       });
       console.log(resp.data);
       return resp.data
    }catch(error){
       return thunkAPI.rejectWithValue('there was an error')
    }
})



const allJobsSlice = createSlice({
    name: 'allJobs',
    initialState,
    reducers:{
         showLoading:(state)=>{
            state.isLoading = true
         },
         hideLoading:(state)=>{
            state.isLoading = false
         },
         //we use this to handle the changes 
         handleChange:(state,{payload:{name,value}})=>{
            //state.page = 1 later
            state[name]=value;
         },
         clearFilters:(state)=>{
            return {...state,...initialFilterState}
         }
    },
    extraReducers:{
        [getAllJobs.pending]:(state)=>{
           state.isLoading = true
        },
        [getAllJobs.fulfilled]:(state,{payload})=>{
            state.isLoading = false
            state.jobs = payload.jobs
         },
         [getAllJobs.rejected]:(state,{payload})=>{
            state.isLoading = false
            toast.error(payload)
         },
    }
    
})

export const { showLoading,hideLoading,handleChange,clearFilters}= allJobsSlice.actions

export default allJobsSlice.reducer;