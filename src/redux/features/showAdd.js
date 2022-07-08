import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const showAddSlice = createSlice({
  name: "showAdd",
  initialState: { value: initialStateValue },
  reducers: {
    handleAddToggle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { handleAddToggle } = showAddSlice.actions;

export default showAddSlice.reducer;
