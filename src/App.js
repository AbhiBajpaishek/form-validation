import styles from "./App.module.css";
import React,{useState} from "react";
import Card from "./components/UI/Card/Card";
import FormControl from "./components/FormControl/FormControl";
import UserList from "./components/UserList/UserList";
import ErrorBox from "./components/UI/ErrorBox/ErrorBox";

const DUMMYUSERS= [
  {
      username:"abhi",
      age:12
  },
  {
      username:"vatsala",
      age:35
  }
]

function App() {

  const [usersList,setUserList]=useState(DUMMYUSERS);
  const [isValid,setIsValid] = useState(true);
  const [errorMsg,setErrorMsg] = useState('');

  const addUserHandler = (newUser,msg) => {
    if(msg.length>0){
      setIsValid(false);
      setErrorMsg(msg);
      return;
    }
    setUserList((prevState)=>{
        return [newUser,...prevState];
    });
  }

  const errorOkayHandler = () =>{
    setIsValid(true);
  }


  return (
    <div className={styles.container}>
      <div className={`${styles.backdrop} ${isValid && styles['hide']}`} onClick={errorOkayHandler}>
        
      </div>
      <Card className={`${styles['error-container']} ${isValid && styles['hide']}`}>
          <ErrorBox onSuccess={errorOkayHandler} erroMsg={errorMsg}></ErrorBox>
      </Card>

      <FormControl onAdd={addUserHandler}>
      </FormControl>

      <Card>
        <UserList users={usersList}></UserList>
      </Card>
    </div>
  );
}

export default App;
