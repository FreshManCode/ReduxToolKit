import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ReduxToolKit from "./route/ReduxToolKit";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "@mui/styles";

import {
  Route,
  HashRouter as Router,
  BrowserRouter,
  Switch,
  Redirect,
  withRouter,
  Link,
  HashRouter,
} from "react-router-dom";
// import routes from "./route";
import MyRouter from "./route/Router/Router";

const theme = {
  background: 'red',
  spacing:'8px',
};

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <MyRouter />
      </ThemeProvider>
    </React.StrictMode>
    ,
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
