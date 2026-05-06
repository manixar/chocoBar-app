import React from "react";
import { css, cx } from "@emotion/css";
import {type} from "node:os";

const Button =({ children , type }) => (
    <button
    className={css`
    padding: 8px;
        border: none;
        cursor: pointer;
        //if my button is primary,bgcolor is pink but if not, bgcolor is blue
        background-color: ${type === 'primary'?'hotpink':'blue'};
        border-radius: 15px;
        &:hover {
            background-color: transparent;
            transition: all 0.5s ease;
        }
    `}
    >
        {children}
    </button>
)
export default Button;