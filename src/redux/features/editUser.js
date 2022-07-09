import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "https://stage.api.sloovi.com";
const COMPANY_ID = "company_413ef22b6237417fb1fba7917f0f69e7";
const ACCESS_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTY5MDY1NTMsIm5iZiI6MTY1NjkwNjU1MywianRpIjoiZmM3YWQzMjctMjEzMC00NzE0LWJiYTYtYjBhNmMzYTdhZmIyIiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1bmRhciBQaWNoYWkiLCJlbWFpbCI6InNtaXRod2lsbHMxOTg5QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzRlZTRjZjY3YWQ0NzRhMjc5ODhiYzBhZmI4NGNmNDcyIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9jZjk0Yjc0YmQ0MWI0NjZiYjE4NWJkNGQ2NzRmMDMyYj9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.eQfaiXYncvlMjvxKKCxgGO7_OwfTvrXBKhJCbiXN4mE";

let config = { Authorization: "Bearer " + ACCESS_TOKEN };

export const getEditUser = createAsyncThunk(
  "getEditUser",
  async ({ task_id, task }, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "put",
        url: `${BASE_URL}/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${task_id}?company_id=${COMPANY_ID}`,
        headers: config,
        data: task,
      });

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const editUser = createSlice({
  name: "editUser",
  initialState: {
    data: [],
    loading: false,
    isSuccess: false,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getEditUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getEditUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;

      toast.success(payload.message);
    },
    [getEditUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";

      toast.error(payload.message);
    },
  },
});

export default editUser.reducer;
