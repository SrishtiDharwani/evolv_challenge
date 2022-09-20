import React from "react";
import ProgressBar from "../UIElements/ProgressBar";
import classes from "./Macros.module.css";

const Macros = (props) => {
  return (

   <div className={classes.barHolder}>
      <div className={classes.bar}>
        <div className={classes.barInfo}>
          <p>PROTEIN</p>
          <p>{props.proteinTarget}g</p>
        </div>
        <ProgressBar
          consumed={props.proteinConsumed}
          width={(props.proteinConsumed / props.proteinTarget) * 100}
          color="#F45C84"
        />
      </div>
      <div>
        <div className={classes.bar}>
          <div className={classes.barInfo}>
            <p>FATS</p>
            <p>{props.fatTarget}g</p>
          </div>
          <ProgressBar
            consumed={props.fatConsumed}
            width={(props.fatConsumed / props.fatTarget) * 100}
            color="#03C6FA"
          />
        </div>
      </div>
      <div>
        <div className={classes.bar}>
          <div className={classes.barInfo}>
            <p>CARBS</p>
            <p>{props.carbTarget}g</p>
          </div>
          <ProgressBar
            consumed={props.carbConsumed}
            width={(props.carbConsumed / props.carbTarget) * 100}
            color="#F0C50F"
          />
        </div>
      </div>
     </div>


  );
};

export default Macros;
