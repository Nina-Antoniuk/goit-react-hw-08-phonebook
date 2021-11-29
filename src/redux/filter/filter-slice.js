import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterValue: (_, action) => {
      return action.payload;
    },
  },
});

export const { filterValue } = filterSlice.actions;
export default filterSlice.reducer;
