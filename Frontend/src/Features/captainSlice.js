import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const logincaptain = createAsyncThunk('captain/login', async (captaindata, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_Base_URL}/captains/login`, captaindata);
    if (response.status === 200) {
      localStorage.setItem('token', response.data.token); // Store token in local storage
      return response.data;
    }
    else {
      console.error('Unexpected response status:', response.status);
      return rejectWithValue({ message: 'Unexpected status code', status: response.status });
    }
  } catch (error) {
    console.error('Login API error:', error.response?.data || error.message);
    return rejectWithValue(error.response.data);
  }
});

const initialState = {
  fullname: [{ firstname: '', lastname: '' }],
  email: '',
  password: '',
  vehicle: {
    color: '',
    capacity: '',
    plate: '',
    vehicletype: ''
  },
  isloggedin: false,
  loading: false,
  error: null,
};

const captainSlice = createSlice({
  name: 'captain',
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
    setvehcile: (state, action) => {
      state.vehicle.color = action.payload.color;
      state.vehicle.capacity = action.payload.capacity;
      state.vehicle.plate = action.payload.plate;
      state.vehicle.vehicletype = action.payload.vehicletype;
    },
    setcaptain: (state, action) => {
      state.fullname[0].firstname = action.payload.firstname;
      state.fullname[0].lastname = action.payload.lastname;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.vehicle.color = action.payload.color;
      state.vehicle.capacity = action.payload.capacity;
      state.vehicle.plate = action.payload.plate;
      state.vehicle.vehicletype = action.payload.vehicletype;
      state.isloggedin = true;
    },
    reset: (state) => {
      state.fullname = [{ firstname: '', lastname: '' }];
      state.email = '';
      state.password = '';
      state.vehicle = {
        color: '',
        capacity: '',
        plate: '',
        vehicletype: ''
      };
      state.isloggedin = false;
      state.error = null;
    },
    logout: (state) => {
      state.fullname = [{ firstname: '', lastname: '' }];
      state.email = '';
      state.password = '';
      state.vehicle = {
        color: '',
        capacity: '',
        plate: '',
        vehicletype: ''
      };
      state.token = null; // Clear the token from Redux state
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logincaptain.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logincaptain.fulfilled, (state, action) => {
        state.loading = false;
        state.fullname = action.payload.fullname;
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.vehicle.color = action.payload.color;
        state.vehicle.capacity = action.payload.capacity;
        state.vehicle.plate = action.payload.plate;
        state.vehicle.vehicletype = action.payload.vehicletype;
        state.token = action.payload.token;
      })
      .addCase(logincaptain.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setfullname, setemail, setpassword, setvehcile, setcaptain, reset, logout } = captainSlice.actions;
export default captainSlice.reducer;
