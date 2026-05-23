import React from "react";
import styles from "./hyperlink.module.scss";
import Link from "next/link";
import {Typography} from "@mui/material";

const Hyperlink =({ href , children }) => {

return (
    <Link href={href} className={styles.hyperLinkText}>
        <span >{children}</span>
    </Link>
)}
export default Hyperlink;