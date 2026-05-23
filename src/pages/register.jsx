import { useState } from "react";
import { useRouter } from "next/router";
import LayoutAuth from "../containers/LayoutAuth/LayoutAuth";

import {
    TextField,
    Button,
    Typography,
    InputAdornment,
    IconButton,
    Box,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Head from "next/head";
import {InputEmail, InputNumber, InputPassword, InputText} from "../components";

export default function Register() {
    const [formValue, setFormValue] = useState({})

    const router = useRouter()

    const handleSubmit = (event) => {
        if (event) event.preventDefault()
        //handling calling api
        console.log("form has been submitted" , formValue);
        //if success
        router.push("/dashboard")
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
                <title>ثبت نام</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <LayoutAuth>
                <Typography sx={{mb:3,fontFamily: 'var(--font-shabnam)'}}>لطفا ثبت نام کنید</Typography>
                <Box onSubmit={handleSubmit} component='form' dir='rtl'>
                        <InputText onChange={(value) => handleOnChange('name' , value)} placeholder="اسم و فامیلی" />
                        <InputNumber onChange={(value) => handleOnChange('number' , value)} placeholder="شماره همراه" />
                        <InputEmail onChange={(value) => handleOnChange('email' , value)} placeholder="ایمیل" />
                        <InputPassword onChange={(value) => handleOnChange('password' , value)} placeholder="کلمه عبور" />
                        <InputPassword onChange={(value) => handleOnChange('password' , value)} placeholder="تکرار کلمه عبور" />

                        <Button
                            onClick={() => router.push("/dashboard")}
                            type="submit"
                            fullWidth
                            sx={{
                                borderRadius: "25px",
                                background: "#3b2519",
                                color: "#fff",
                                py: 1.2,
                                "&:hover": { background: "#2c1b12" },
                            }}>
                            <Typography variant="caption">
                            تایید
                            </Typography>
                        </Button>
                    <Box sx={{display: "flex", justifyContent: "space-between",flexDirection: "row", alignItems: "center"}}>
                    <Typography
                        sx={{
                            mt: 2,
                            cursor: "pointer",
                            color: "#6d4b3e",
                            fontSize: "15px",
                        }}
                        onClick={() => router.push("/login")}
                    >
                    قبلا ثبت نام کرده اید؟
                        </Typography>
                    <Typography
                        sx={{
                            mt: 2,
                            cursor: "pointer",
                            color: "#6d4b3e",
                            fontSize: "15px",
                        }}
                        onClick={() => router.push("/forgot")}
                    >
                        فراموشی کلمه عبور</Typography>
                    </Box>
                </Box>
            </LayoutAuth>
        </>
    )
}
