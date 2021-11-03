// 创建slice
/**
 * 使用createSlice方法创建一个slice。每一个slice里面包含了reducer和actions，可以实现模块化的封装。所有的相关操作都独立在一个文件中完成。
 
 * 关键属性:

 1.name
 2.initialState
 3.reducers
 */

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const baseURL = "https://mpay.sina.com.cn/"
const captchaReq = axios.create();

export const counterSlice = createSlice({
  //命名空间,在调用action的时候会默认的设置为action的前缀
  name: "counter",
  //初始值
  initialState: {
    count: 1,
    title: "redux toolkit pre",
    capthaCode:'',
  },
  //  这里的属性会自动的导出为actions，在组件中可以直接通过dispatch进行触发
  reducers: {
    increment(state,{payload}) {
       console.log('state is:',state,'payload is:',payload);
       state.count = state.count + payload.step;
    },
    decrement(state) {
        state.count -= 1;
    }, 
    capthaCode(state,{payload}) {
      state.capthaCode = payload.capthaCode
    }

  },
});

// 导出actions
export const {increment,decrement,capthaCode}  = counterSlice.actions;

// 内置了thunk插件,可以直接处理异步请求
export const asyncIncrement = (payload)=>(dispatch)=>{
    setTimeout(() => {
        dispatch(increment(payload));
    }, 2500);
}

export const getCaptatueCode = (payload)=>(dispatch)=>{
  let token = '20211029021111'
  let wxCode= sessionStorage['wxCode']
  let imgSrc = `${baseURL}mobile-cashdesk/comm/captchaByToken.m?token=${token}&platform=3&code=${wxCode}`;
  let config = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    responseType: "arraybuffer",
  };
  console.log("imgSrc__:", imgSrc);
  captchaReq
    .get(imgSrc, config)
    .then((res) => {
      console.log("res:", res.data);
      let result =
        "data:image/png;base64," +
        btoa(
          new Uint8Array(res.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
      dispatch(capthaCode({capthaCode:result}))
    })
    .catch((error) => {
      console.log("axios error is:", error);
    });
}

// 导出reducer,在创建store时会用到
export default counterSlice.reducer;
