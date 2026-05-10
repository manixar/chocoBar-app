import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#9c27b0",
        },
        background: {
            default: "#f5f5f5",
        },
    },

    typography: {
        fontFamily: "var(--font-shabnam), Arial, sans-serif",

        h1: {
            fontSize: "2.5rem",
            fontWeight: 700,
            fontFamily: "var(--font-shabnam), Arial, sans-serif",
        },

        h2: {
            fontSize: "2rem",
            fontWeight: 600,
            fontFamily: "var(--font-shabnam), Arial, sans-serif",
        },

        h3: {
            fontFamily: "var(--font-shabnam), Arial, sans-serif",
        },

        h4: {
            fontFamily: "var(--font-shabnam), Arial, sans-serif",
        },

        h5: {
            fontFamily: "var(--font-shabnam), Arial, sans-serif",
        },

        h6: {
            fontFamily: "var(--font-shabnam), Arial, sans-serif",
        },

        body1: {
            fontFamily: "var(--font-shabnam), Arial, sans-serif",
        },

        body2: {
            fontFamily: "var(--font-shabnam), Arial, sans-serif",
        },

        button: {
            fontFamily: "var(--font-shabnam), Arial, sans-serif",
        },
    },

    shape: {
        borderRadius: 8,
    },
});

export default theme;
