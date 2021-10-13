import { configureStore } from '@reduxjs/toolkit';
import { headerSlice } from './headerSlice';

export default configureStore({
  reducer: {
    headerVisualizer: headerSlice,
  },
});
