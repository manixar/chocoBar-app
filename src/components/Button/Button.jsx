import React from "react";
import styles from "./button.module.scss";

const Button = ({ children, type = "button", ...props }) => (
    <div className={styles.buttonContainer}>
        <button type={type} {...props}>
            {children}
        </button>
    </div>

)
export default Button;