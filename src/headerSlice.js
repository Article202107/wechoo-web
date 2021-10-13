import { createSlice } from '@reduxjs/toolkit';

export const headerSlice = createSlice({
  name: 'headerVisualizer',
  initialState: {
    value: true,
  },
  reducers: {
    show: (state) => {
      state.value = false;
    },
    hide: (state) => {
      state.value = false;
    },
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { show, hide, toggle } = headerSlice.actions;

export default headerSlice.reducer;
