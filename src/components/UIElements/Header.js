import React from "react";
import step from "../../assets/step.png";
import dumbbell from "../../assets/dumbbell.png";
import nutrition from "../../assets/nutrition.png";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.head}>
      <div className={classes.header}>
        <div>
          <img src={step} alt="steps"></img>
          <h3>Steps</h3>
        </div>
        <div>
          <img src={dumbbell} alt="workout"></img>
          <h3>Workout</h3>
        </div>
        <div>
          <img src={nutrition} alt="nutrition"></img>
          <h3>Nutrition</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
