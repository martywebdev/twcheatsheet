import { createSlice } from "@reduxjs/toolkit";

const initialState = {
};

export const utilitySlice = createSlice({
  name: "typography",
  initialState,
  reducers: {
    setUtility: (state, action) => {
      const { tag, value } = action.payload;
      state[tag] = value;
      state.utilities = Object.keys(state)
        .filter(key => key !== 'utilities' && state[key])  // Exclude 'fontStyles' and ensure the value is truthy
        .map(key => state[key])  // Get the values
        .join(' ');  // Join the values into a single string
    },
  },
});

export const { setUtility } = utilitySlice.actions;
export default utilitySlice.reducer;
