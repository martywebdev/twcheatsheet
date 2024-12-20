import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fontFamily: "",
  fontSize: "",
  fontStyles: ""
};

export const typographySlice = createSlice({
  name: "typography",
  initialState,
  reducers: {
    setTypography: (state, action) => {
      const { tag, value } = action.payload;
      console.log(state, action.payload);
      state[tag] = value;
      state.fontStyles = Object.keys(state)
        .filter(key => key !== 'fontStyles' && state[key])  // Exclude 'fontStyles' and ensure the value is truthy
        .map(key => state[key])  // Get the values
        .join(' ');  // Join the values into a single string
    },
  },
});

export const { setTypography } = typographySlice.actions;
export default typographySlice.reducer;
