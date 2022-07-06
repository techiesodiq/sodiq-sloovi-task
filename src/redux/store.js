import { configureStore } from "@reduxjs/toolkit";
import addUserReducer from "./features/addUser";
import editUserReducer from "./features/editUser";
import showReducer from "./features/show";
import userDetailsReducer from "./features/userDetails";

const store = configureStore({
  reducer: {
    show: showReducer,
    userDetails: userDetailsReducer,
    addUser: addUserReducer,
    editUser: editUserReducer,
  },
});

export default store;
