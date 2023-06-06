import {configureStore} from '@reduxjs/toolkit'
import userSlice from './features/user/userSlice'
import jobSlice from './features/job/JobSlice'
import allJobsSlice from './features/alljobs/AlljobsSlice'

export const store = configureStore({
    reducer:{
        user: userSlice,
        job:jobSlice,
        allJobs:allJobsSlice

    }
})