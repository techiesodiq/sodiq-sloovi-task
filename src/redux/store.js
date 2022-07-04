import { configureStore } from "@reduxjs/toolkit";
import showReducer from "./features/show";
import userDetailsReducer from "./features/userDetails";

const store = configureStore({
  reducer: {
    show: showReducer,
    userDetails: userDetailsReducer,
  },
});

export default store;
