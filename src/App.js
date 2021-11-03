import logo from "./logo.svg";
import "./App.css";
// 注意新版本的React,要想使用scss 语法,命名必须是x.module.scss,否则无法正常识别
import styles from "./styles/App.module.scss";

import { BrowserRouter } from "react-router-dom";
// import RouterView from "./route/Router/RouterView";
// import RouterConfig from "./route/Router/Router.config";
// import { Suspense } from "react";

function App() {
  return (
    <BrowserRouter>
    </BrowserRouter>
  );
}

export default App;
