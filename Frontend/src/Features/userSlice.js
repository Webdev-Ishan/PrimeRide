import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginuser = createAsyncThunk('user/loginuser', async (userdata, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_Base_URL}/users/login`, userdata);

    if (response.status === 200) {
      localStorage.setItem('token', response.data.token);
      return response.data;
    } else {
      console.error('Unexpected response status:', response.status);
      return rejectWithValue({ message: 'Unexpected status code', status: response.status });
    }
  } catch (error) {
    console.error('Login API error:', error.response?.data || error.message);
    return rejectWithValue(error.response?.data || { message: 'Something went wrong' });
  }
});

const initialState = {
  fullname: [{ firstname: '', lastname: '' }],
  email: '',
  password: '',
  token: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setfullname: (state, action) => {
      state.fullname[0].firstname = action.payload.firstname;
      state.fullname[0].lastname = action.payload.lastname;
    },
    setemail: (state, action) => {
      state.email = action.payload;
    },
    setpassword: (state, action) => {
      state.password = action.payload;
    },
    setuser: (state, action) => {
      state.fullname[0].firstname = action.payload.firstname;
      state.fullname[0].lastname = action.payload.lastname;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isloggedin = true;
    },
    reset: (state) => {
      state.fullname = [{ firstname: '', lastname: '' }];
      state.email = '';
      state.password = '';
      state.isloggedin = false;
      state.error = null;
    },
    logout: (state) => {
      state.fullname = [{ firstname: '', lastname: '' }];
      state.email = '';
      state.password = '';
      state.token = null; // Clear the token from Redux state
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginuser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginuser.fulfilled, (state, action) => {
        state.loading = false;
        state.fullname = action.payload.fullname;
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.token = action.payload.token;
      })
      .addCase(loginuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setfullname, setemail, setpassword, setuser, reset, logout } = userSlice.actions;
export default userSlice.reducer;