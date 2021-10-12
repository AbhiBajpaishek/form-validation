import React from "react";
import Button from "../Button/Button";
import './ErrorBox.css';

const ErrorBox = (props) => {

const okayClickHandler= () =>{
    props.onSuccess();
}

    return <div>
        <div className="error-header">
            Invalid Input
        </div>
        <div className="error-msg">
            <label>{props.erroMsg}</label>
            <Button className="error-btn" onClick = {okayClickHandler}>OKAY</Button>
        </div>
    </div>
}

export default ErrorBox;