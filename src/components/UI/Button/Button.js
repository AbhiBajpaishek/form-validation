import React from "react";
import styles from './Button.module.css';

const Button = (props) => {

    const addUserHandler = (event) =>{
        event.preventDefault();
        props.onClick();
    }
    return (
        <div>
            <button className={`${styles.btn} ${props.className}`} onClick={addUserHandler} >{props.children}</button>
        </div>
    );
}

export default Button;