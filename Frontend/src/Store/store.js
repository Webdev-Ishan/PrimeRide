import {configureStore} from '@reduxjs/toolkit'
import userreducer from '../Features/userSlice'
import captainreducer from '../Features/captainSlice'
export const store = configureStore({
    reducer:{
        user:userreducer,
        captain:captainreducer
        
    },
    
});