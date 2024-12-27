import { createSlice } from "@reduxjs/toolkit";

const initialState = {
};

export const flexSlice = createSlice({
  name: "flex",
  initialState,
  reducers: {
    setFlex: (state, action) => {
      const { tag, value } = action.payload;
      state[tag] = value;
      state.flexItems = Object.keys(state)
        .filter(key => key !== 'flexItems' && state[key]) 
        .map(key => state[key]) 
        .join(' '); 
    },
  },
});

export const { setFlex } = flexSlice.actions;
export default flexSlice.reducer;
