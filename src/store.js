import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOverlay: false,
  receivedData: [],
  dates: { checkIn: "", checkOut: "" },
  currentShow: "all",
  currentFocus: 0,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setOverlay: (state, action) => {
      state.isOverlay = action.payload;
    },
    setReceivedData: (state, action) => {
      state.receivedData = action.payload;
    },
    setDates: (state, action) => {
      state.dates = action.payload;
    },
    setCurrentShow: (state, action) => {
      state.currentShow = action.payload;
    },
    setCurrentFocus: (state, action) => {
      state.currentFocus = action.payload;
    },
  },
});

// Extract the action creators from the slice
export const {
  setOverlay,
  setReceivedData,
  setDates,
  setCurrentShow,
  setCurrentFocus,
} = dataSlice.actions;

// Create the Redux store
const store = configureStore({
  reducer: dataSlice.reducer,
});

export default store;
