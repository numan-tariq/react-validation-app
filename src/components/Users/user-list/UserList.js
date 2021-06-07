import React from "react";
import classes from "./UserList.module.css";
import Card from "../../UI/card/Card";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} year old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
