import React, { useState, useEffect, useCallback } from "react";
import Header from "./UIElements/Header";
import AllUsers from "./AllUsers";
import classes from "./Container.module.css";

const Container = () => {
  const [loadedUsers, setLoadedUsers] = useState();

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:5000/api/home");
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }
      setLoadedUsers(responseData.users);
    } catch (err) {}
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className={classes.main}>
      <Header />
      {loadedUsers && <AllUsers users={loadedUsers} />}
    </div>
  );
};

export default Container;
