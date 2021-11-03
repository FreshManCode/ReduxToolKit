import { Button } from "@mui/material";
import React from "react";

export default class Home extends React.Component {
  render() {
    console.log("Layout_props:", this.props);
    return (
      <div>
        Home子组件
        <Button
          onClick={() => {
            this.props.history.push("/reduxToolKit");
          }}
        >
          前往ReduxToolKitO
        </Button>
        <Button
          onClick={() => {
            this.props.history.push("/login");
          }}
        >
          去登录吧
        </Button>
      </div>
    );
  }
}
