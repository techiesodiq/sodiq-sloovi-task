import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const showEditSlice = createSlice({
  name: "showEdit",
  initialState: { value: initialStateValue },
  reducers: {
    handleEditToggle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { handleEditToggle } = showEditSlice.actions;

export default showEditSlice.reducer;
