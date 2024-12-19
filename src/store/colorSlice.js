import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedStyles: [
    { type: 'text', color: "black", shade: "", hoverColor: "", hoverShade: "" },
  ]
};
export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setStyle: (state, action) => {
      const { type, ...rest } = action.payload;

      // Find if the style already exists
      const found = state.selectedStyles.find(style => style.type === type);

      if (found) {
        // Update the existing style
        state.selectedStyles = state.selectedStyles.map(style =>
          style.type === type ? { ...style, ...rest } : style
        );
      } else {
        // Add a new style
        state.selectedStyles.push({ type, ...rest });
      }
    },
  },
});

// Export actions to dispatch
export const { setStyle } = colorSlice.actions;

// Export reducer to use in the store
export default colorSlice.reducer;