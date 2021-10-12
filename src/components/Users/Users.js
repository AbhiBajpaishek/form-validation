import React from "react";
import styles from './Users.module.css';

const Users = (props) => {

    let content= props.user.username + ' ('+ props.user.age + 'years old)';
    return (
        <div className= {styles.users}>
            <input type="text" readOnly value = {content} className={styles["user-detail"]}></input>
        </div>
    );
}

export default Users;