import React from "react";
import { connect } from "react-redux";

import {
  increment,
  asyncIncrement,
  getCaptatueCode,
} from "../store/features/counterSlice";

// 如果不使用hooks函数,需要使用react-redux 中的connect函数,进行相关数据绑定

class ReduxToolKit extends React.Component {
  render() {
    console.log("props:", this.props, "state :", this.state);
    return (
      <div>
        <p>count is:{this.props.timeCount.count}</p>
        <button
          onClick={() => {
            this.props.increment({ step: 2 });
          }}
        >
          Increment_无延迟
        </button>
        <button
          onClick={() => {
            this.props.asyncIncrement({ step: 2 });
          }}
        >
          Increment_异步
        </button>
        <button
          onClick={() => {
            this.props.getCaptatueCode();
          }}
        >
          获取图形验证码
        </button>
        {this.props.timeCount.capthaCode && (
          <img src={this.props.timeCount.capthaCode}></img>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // counter 对应的reducer名字
  timeCount: state.counter,
});
const mapDispatchToProps = { increment, asyncIncrement, getCaptatueCode };

export default connect(mapStateToProps, mapDispatchToProps)(ReduxToolKit);
