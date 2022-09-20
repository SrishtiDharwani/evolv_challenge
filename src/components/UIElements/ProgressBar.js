import React from "react";
import classes from "./ProgressBar.module.css";

const ProgressBar = (props) => {
    const percent=(props.cons/props.target)*100;
    // console.log(props.width);
  return (
    <div className={classes.progressBar}>
      <div
        // 
        style={{
          width:'25%,', color:'red'
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
