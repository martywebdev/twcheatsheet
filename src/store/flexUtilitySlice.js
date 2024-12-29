import { createSlice } from "@reduxjs/toolkit";

const initialState = {
};

export const flexUtilitySlice = createSlice({
  name: "flexUtilities",
  initialState,
  reducers: {
    setFlexUtility: (state, action) => {
      const { tag, value } = action.payload;
      state[tag] = value;
      state.flextUtilities = Object.keys(state)
        .filter(key => key !== 'flextUtilities' && state[key]) 
        .map(key => state[key]) 
        .join(' '); 
    },
  },
});

export const { setFlexUtility } = flexUtilitySlice.actions;
export default flexUtilitySlice.reducer;
