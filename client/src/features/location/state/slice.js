import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_IP = import.meta.env.VITE_API_URL;

const initialState = {
    apiResponse: {},
    status: 'idle',
    error: null
};

const getLocation = createAsyncThunk('location/getLocation', async (ipAddress) => {
    try {
        const res = await fetch(`${API_IP}/workaround-api/${ipAddress}`);
        if (!res.ok) {
            return rejectWithValue('Failed to fetch location data');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
});

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getLocation.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getLocation.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
          .addCase(getLocation.fulfilled, (state, action) => {
            state.status = 'success';
            state.apiResponse = action.payload;
          })
    }
});

export const { actions: locationActions } = locationSlice;
export { getLocation };
export default locationSlice.reducer;
