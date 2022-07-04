import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const showSlice = createSlice({
  name: "show",
  initialState: { value: initialStateValue },
  reducers: {
    handlePlus: (state, action) => {
      state.value = action.payload;
    },

    handleCancel: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { handlePlus, handleCancel } = showSlice.actions;

export default showSlice.reducer;
