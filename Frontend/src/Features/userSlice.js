import {createSlice} from '@reduxjs/toolkit'

const initialState= {

    Fullname:[{Firstname:'', Lastname:''}],
    email:'',
    password:'',
}

export const userSlice= new createSlice({

    name:'user',
    initialState,
    reducers:{
        setFullname:(state, action)=>{
            state.Fullname[0].Firstname = action.payload.Firstname;
            state.Fullname[0].Lastname = action.payload.Lastname;
        },
        setemail:(state, action)=>{
            state.email=action.payload;
        },
        setpassword: (state, action)=>{
state.password= action.payload;

        }
       
    }
})

export const {setFullname,setemail,setpassword} = userSlice.actions;

export default userSlice.reducer;