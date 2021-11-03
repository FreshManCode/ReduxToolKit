import {
  Avatar,
  Button,
  TextField,
  Container,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { makeStyles, ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import React, { useEffect, useState } from "react";

const useStyles = makeStyles({
  paper: {
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: "10px",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  submit: {
    margin: "20px",
    height: "44px",
  },
  gap: {
    width: "100%",
    height: "20px",
  },
});

const insetStyle = {
  box: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: { m: 1, bgcolor: "secondary.main" },
};

const theme = createTheme();
export default function Login(props) {
  const classes = useStyles();

  // 是否使用自动填充
  var [autoFill, setAutoFill] = useState(true);

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      checkbox: data.get("checkbox"),
    });
  };

  // checkbox 改变状态
  function changeAutoLogin(event) {
    setAutoFill(event.target.checked);
  }

  // 弹出验证密码框
  function showPSWDialod() {
    setOpenDialog(true);
  }

  function handleClose() {
    setOpenDialog(false);
  }

  function handlePSW(event) {
    setOpenDialog(false);
    let psw = document.getElementById("password_dialog").value;
    console.log("psw is:", psw);
  }

  // useEffect ,第二个参数如果为[],则只是组件首次加载完成时执行一次

  useEffect(() => {
    console.log("didAmount", "theme:", props);
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={insetStyle.box}>
          <Avatar sx={insetStyle.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            登录
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password_dialog"
              autoComplete="current-password"
            />
            {/* 可以在复选框旁边添加label */}
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  onChange={changeAutoLogin}
                  checked={autoFill}
                />
              }
              label="是否记住密码"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              登录
            </Button>
            <Button
              fullWidth
              variant="contained"
              onClick={showPSWDialod}
              sx={{ mt: 3, mb: 2, bgcolor: "red" }}
            >
              验证密码框
            </Button>
            {/*container属性 flex布局  */}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  忘记密码
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"未创建账号?去注册"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>提示</DialogTitle>
        <DialogContent>
          <DialogContentText>
            为了保证您的账号安全,需要验证您的密码
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="密码"
            type="password"
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handlePSW}>提交</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright@zhangjunjun"}
      <Link
        color="inherit"
        href="https://github.com/FreshManCode/ZJPasswordStyle"
      >
        我的主页
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
