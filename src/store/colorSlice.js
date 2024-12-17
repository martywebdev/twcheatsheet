import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedStyles: {
    text: { color: "black", shade: "500" },
    background: { color: "", shade: "500" },
    border: { color: "gray", shade: "300" },
    ring: { color: "blue", shade: "500" },
  },
};
export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setStyle: (state, action) => {
      const { type, color, shade } = action.payload;
      state.selectedStyles[type] = { color, shade };
    },
  },
});

// Export actions to dispatch
export const { setStyle } = colorSlice.actions;

// Export reducer to use in the store
export default colorSlice.reducer;