import {configureStore} from '@reduxjs/toolkit'
import userreducer from '../Features/userSlice'
export const store = configureStore({
    reducer:{
        user:userreducer,
    }
});