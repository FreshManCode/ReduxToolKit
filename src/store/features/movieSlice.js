import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movieSlice",
  //初始值
  initialState: {
    count: 1,
    title: "redux toolkit pre",
  },
  reducers: {
    increment(state, { payload }) {
      state.count = state.count + payload.step;
    },
    decrement(state) {
      state.count -= 1;
    },
  },
});

// 导出actions
export const { increment, decrement } = movieSlice.actions;

// 内置了thunk差劲,可以直接处理异步请求
export const asyncIncrement = (payload) => (dispatch) => {
  setTimeout(() => {
    dispatch(increment(payload));
  }, 2500);
};

// 导出reducer,在创建store时会用到
export default movieSlice.reducer;
