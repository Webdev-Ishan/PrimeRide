import {createSlice} from '@reduxjs/toolkit'

const initialState= {

    fullname:[{firstname:'', lastname:''}],
    email:'',
    password:'',
}

export const userSlice= new createSlice({

    name:'user',
    initialState,
    reducers:{
        setfullname:(state, action)=>{
            state.fullname[0].firstname = action.payload.firstname;
            state.fullname[0].lastname = action.payload.lastname;
        },
        setemail:(state, action)=>{
            state.email=action.payload;
        },
        setpassword: (state, action)=>{
state.password= action.payload;

        },

        setuser:(state, action)=>{

            state.fullname[0].firstname = action.payload.firstname;
            state.fullname[0].lastname = action.payload.lastname;
            state.email=action.payload.email;
            state.password=action.payload.password;

        },
        reset: (state) => {
            state.firstname = '';
            state.lastname = '';
            state.email = '';
            state.password = '';
          },
       
    },
});

export const {setfullname,setemail,setpassword, setuser,reset} = userSlice.actions;

export default userSlice.reducer;