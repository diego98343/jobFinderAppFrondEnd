import {configureStore} from '@reduxjs/toolkit'
import userSlice from './features/user/userSlice'
import jobSlice from './features/job/JobSlice'

export const store = configureStore({
    reducer:{
        user: userSlice,
        job:jobSlice
    }
})