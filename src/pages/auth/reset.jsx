import { useState } from "react";
import Head from "next/head";
import LayoutAuth from "../../containers/LayoutAuth/LayoutAuth";
import styles from "./athentication/login.module.scss";
import { InputEmail, InputPassword } from "../../components";
import { Button, Box, Typography } from "@mui/material";

export default function Reset() {
  const [formValue, setFormValue] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    console.log("password has been reset", formValue);
  };
  const handleOnChange = (name, value) => {
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  return (
    <>
      <Head>
        <title>تغییر کلمه عبور</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutAuth>
        <Typography sx={{ mb: 3, fontFamily: "var(--fonts-shabnam)" }}>
          تغییر رمز عبور
        </Typography>
        <Box component="form" onSubmit={handleSubmit} dir="rtl">
          <InputEmail
            onChange={(value) => handleOnChange("email", value)}
            placeholder="ایمیل"
          />

          <Button
            type="submit"
            fullWidth
            sx={{
              borderRadius: "25px",
              background: "#3b2519",
              color: "#fff",
              py: 1.2,
              "&:hover": { background: "#2c1b12" },
            }}
          >
            <Typography variant="caption">تایید</Typography>
          </Button>
        </Box>
      </LayoutAuth>
    </>
  );
}
