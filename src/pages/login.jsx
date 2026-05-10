import {useState} from "react";
import Head from 'next/head'
import LayoutAuth from "../containers/LayoutAuth/LayoutAuth";
import styles from "./athentication/login.module.scss"
import {Button, InputEmail, InputPassword} from "../components";
import FormControl from "../containers/FormControl/FormControl";
import {Typography} from "@mui/material";

export default function Home() {
    const [formValue, setFormValue] = useState({})

    const handleSubmit = (event) => {
        if (event) event.preventDefault()
        console.log("form has been submitted" , formValue);
    }
    const handleOnChange = (name,value) => {
setFormValue({
    ...formValue,
    [name]: value
})
    }
    return (
        <div className={styles.loginContainer}>
        <Head>
            <title>ورود</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <LayoutAuth>
                    <form onSubmit={handleSubmit} dir='rtl'>
                        <Typography variant='h5' align='center'>خوش آمدید</Typography>
                        <FormControl>
                        <InputEmail onChange={(value) => handleOnChange('email' , value)} placeholder="ایمیل" />
                        </FormControl>
                    <FormControl>
                        <InputPassword onChange={(value) => handleOnChange('password' , value)} placeholder="کلمه عبور" />
                    </FormControl>
                    <FormControl>
                        <Button type="submit">وارد شوید</Button>
                    </FormControl>
                    </form>
            </LayoutAuth>
        </div>
    )
}
