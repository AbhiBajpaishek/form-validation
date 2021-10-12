import React from "react";
import Users from "../Users/Users";



const UserList = (props) =>{


    return (
        <div>
            {props.users.map((user,index)=>{
               return <Users user={user} key = {index}></Users>
            })}
        </div>
    );
}

export default UserList;