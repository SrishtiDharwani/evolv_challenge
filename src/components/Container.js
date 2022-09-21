import React, { useState, useEffect, useCallback } from "react";
import Header from "./UIElements/Header";
import AllUsers from "./AllUsers";
import classes from "./Container.module.css";

const Container = () => {
  const [loadedUsers, setLoadedUsers] = useState();
  const [windowWidth,setWindowWidth]=useState(window.innerWidth);
  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

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
      {windowWidth>927&&<Header />}
      {loadedUsers && <AllUsers users={loadedUsers} windowWidth={windowWidth} />}
    </div>
  );
};

export default Container;
