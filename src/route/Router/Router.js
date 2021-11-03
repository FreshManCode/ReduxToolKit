import React from "react";
import { BrowserRouter, withRouter, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import ReduxToolKit from '../ReduxToolKit'
import Login from '../Login'
export default function MyRouter() {
  return (
    // 在绑定组件的时候使用withRouter 包装,则在跳转的时候直接可以使用this.props.history.push("/reduxToolKit") 来进行路由切换
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={withRouter(Home)}></Route>
        <Route exact path="/index" component={withRouter(Home)}></Route>
        <Route exact path="/index/home" component={withRouter(Home)}></Route>
        <Route exact path="/reduxToolKit" component={withRouter(ReduxToolKit)}></Route>
        <Route exact path="/login" component={withRouter(Login)}></Route>
      </Switch>
    </BrowserRouter>
  );
}
