"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import {
    Box,
    Typography,
    TextField,
    Button,
    InputAdornment,
    IconButton,
    Paper,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Image from "next/image";
import Head from "next/head";
import LayoutAuth from "../containers/LayoutAuth/LayoutAuth";
import { InputEmail, InputPassword} from "../components";

export default function Login() {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);
    const [formValue, setFormValue] = useState({})

    const handleSubmit = (event) => {
        if (event) event.preventDefault()
        //calling api
        console.log("form has been login" , formValue);
        //if success
        router.push("/dashboard");
    }
    const handleOnChange = (name,value) => {
setFormValue({
    ...formValue,
    [name]: value
})
    }
    return (
        <>
        <Head>
            <title>ورود</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

            <LayoutAuth>
                <Typography sx={{mb:3,fontFamily: 'var(--font-shabnam)'}}>خوش آمدید</Typography>
                <Box component='form' onSubmit={handleSubmit}>
                    <InputEmail onChange={(value) => handleOnChange('email' , value)} placeholder="ایمیل" />
                    <InputPassword onChange={(value) => handleOnChange('password' , value)} placeholder="کلمه عبور" />
                     <Button type="submit"
                                onClick={() => router.push("/dashboard")}
                                fullWidth
                                sx={{
                                    borderRadius: "25px",
                                    background: "#3b2519",
                                       color: "#fff",
                                    py: 1.2,
                                    "&:hover": { background: "#2c1b12" },
                                }}>
                            <Typography variant="caption">
                            وارد شوید
                            </Typography>
                        </Button>
                <Typography
                    sx={{
                        mt: 2,
                        cursor: "pointer",
                        color: "#6d4b3e",
                        fontSize: "15px",
                    }}
                    onClick={() => router.push("/register")}
                >
                    ثبت نام کنید
                </Typography>
                </Box>
            </LayoutAuth>
            </>
    )
}
