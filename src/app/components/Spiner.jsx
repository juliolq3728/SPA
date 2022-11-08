import { FaSpinner } from 'react-icons/fa';
import styles from "../Styles/spinner.module.css"
import React from "react";

export function Spiner() {
    return (
        <div className={styles.spinner}>
            <FaSpinner className={styles.spinning} size={60} ></FaSpinner>
        </div>
    )
}
