import React,{useState} from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./FormControl.module.css";

const FormControl = (props) => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    

    const usernameChangeHandler= (event) =>{
        setUsername(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setAge(Number(event.target.value));
    } 

    const addClickhandler = () =>{
        let msg='';
        if(age.length<1 || username.trim().length<1)
          msg = 'Please enter a valid username and age(non-empty values)';
        else if(age<1)
          msg = 'Age can\'t be less than 1';

        let newUser= {
            username:username,
            age:age
        };
        props.onAdd(newUser,msg);
        if(msg.length<1){
          setUsername('');
          setAge('');
        }
        
        
    }

  return (
    <Card>
      
      <form className= {styles['container-form']}>
    
        <div className={styles["input-fields"]}>
          <label>Username</label>
          <input type="text" className={styles["input-fields__input"]} onChange = {usernameChangeHandler} value= {username}></input>
        </div>

        <div className={styles["input-fields"]}>
          <label>Age (years)</label>
          <input
            type="number"
            className={styles["input-fields__input"]}
            onChange = {ageChangeHandler}
            value={age}
          ></input>
        </div>

        <Button onClick = {addClickhandler}>Add User</Button>
      </form>
    </Card>
  );
};

export default FormControl;
