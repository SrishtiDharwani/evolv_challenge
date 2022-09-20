import React from "react";
import classes from "./ProgressBar.module.css";

const ProgressBar = ({ consumed, width, color }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${width}%`,
      backgroundColor: `${color}`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className={classes.progress}>
      <div className={classes.progressDone} style={style}></div>
        <p style={{color:`${color}` ,fontSize:"10px", marginLeft:"5px"}}>{consumed}</p>

    </div>
  );
};
export default ProgressBar;
