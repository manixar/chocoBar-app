import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme/theme";
import "../styles/App.scss";

import localFont from "next/font/local";

const shabnam = localFont({
    src: [
        {
            path: "../../public/font/Shabnam/Shabnam.woff2", // مسیر صحیح!
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/font/Shabnam/Shabnam-Bold.woff2", // مسیر صحیح!
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/font/Shabnam/Shabnam-Light.woff2", // مسیر صحیح!
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/font/Shabnam/Shabnam-Medium.woff2", // مسیر صحیح!
            weight: "500",
            style: "normal",
        },
    ],
    variable: "--font-shabnam",
    display: "swap",
});

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={`${shabnam.variable} ${shabnam.className}`}>
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
}

export default MyApp;
