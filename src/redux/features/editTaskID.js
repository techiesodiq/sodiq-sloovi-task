import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const editTaskIDSlice = createSlice({
  name: "editTaskID",
  initialState: { value: initialStateValue },
  reducers: {
    setEditTaskID: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setEditTaskID } = editTaskIDSlice.actions;

export default editTaskIDSlice.reducer;
