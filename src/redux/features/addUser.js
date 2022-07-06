import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://stage.api.sloovi.com";
const COMPANY_ID = "company_413ef22b6237417fb1fba7917f0f69e7";
const ACCESS_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTY5MDY1NTMsIm5iZiI6MTY1NjkwNjU1MywianRpIjoiZmM3YWQzMjctMjEzMC00NzE0LWJiYTYtYjBhNmMzYTdhZmIyIiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1bmRhciBQaWNoYWkiLCJlbWFpbCI6InNtaXRod2lsbHMxOTg5QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzRlZTRjZjY3YWQ0NzRhMjc5ODhiYzBhZmI4NGNmNDcyIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9jZjk0Yjc0YmQ0MWI0NjZiYjE4NWJkNGQ2NzRmMDMyYj9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.eQfaiXYncvlMjvxKKCxgGO7_OwfTvrXBKhJCbiXN4mE";

let config = { Authorization: "Bearer " + ACCESS_TOKEN };

export const getAddUser = createAsyncThunk(
  "getAddUsers",
  async (task, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: `${BASE_URL}/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${COMPANY_ID}`,
        headers: config,
        data: task,
      });
      //   const { data } = await axios.post(
      //     `${BASE_URL}/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${COMPANY_ID}`,
      //     { headers: config },
      //     task
      //   );
      console.log("this is response", data);
      return data;
    } catch (error) {
      console.log("this is error", error);
      rejectWithValue(error);
    }
  }
);

const addUser = createSlice({
  name: "addUser",
  initialState: {
    data: [],
    loading: false,
    isSuccess: false,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getAddUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getAddUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
      console.log(payload);
    },
    [getAddUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
      console.log(payload);
    },
  },
});

export default addUser.reducer;