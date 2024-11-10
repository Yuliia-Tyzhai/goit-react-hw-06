import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter = state => state.filtersData.name;
export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
