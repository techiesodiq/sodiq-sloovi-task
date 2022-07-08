import { configureStore } from "@reduxjs/toolkit";
import addUserReducer from "./features/addUser";
import allTasksReducer from "./features/allTasks";
import deleteUserReducer from "./features/deleteUser";
import editTaskIDReducer from "./features/editTaskID";
import editUserReducer from "./features/editUser";
import showAddReducer from "./features/showAdd";
import showEditReducer from "./features/showEdit";
import singleTaskReducer from "./features/singleTask";
import userDetailsReducer from "./features/userDetails";

const store = configureStore({
  reducer: {
    showAdd: showAddReducer,
    showEdit: showEditReducer,
    userDetails: userDetailsReducer,
    addUser: addUserReducer,
    editUser: editUserReducer,
    deleteUser: deleteUserReducer,
    allTasks: allTasksReducer,
    editTaskID: editTaskIDReducer,
    singleTask: singleTaskReducer,
  },
});

export default store;
