import React, { useState, useCallback } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import classes from "./StepCount.module.css";

const StepCount = (data) => {
  const target = data.stepsTarget / 1000;
  const [steps, setSteps] = useState(target);

  const updateSteps = useCallback(async () => {
    try {
      await fetch(`http://localhost:5000/api/home/${data.userId}/steps`, {
        method: "PUT",
        body: JSON.stringify({ stepsTarget: steps, id: data.userId }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {}
  }, [steps, data.userId]);

  const stepIncrementHandler = () => {
    setSteps((prevSteps)=>(Number(prevSteps) + 0.5).toFixed(1));
    updateSteps();
  };

  const stepDecrementHandler = () => {
    if (steps > 0.5) {
      const newSteps = (steps - 0.5).toFixed(1);
      setSteps(newSteps);
      // setSteps((prevSteps) => (prevSteps - 0.5).toFixed(1));
    } else {
      setSteps(0);
    }
    updateSteps();
  };
  return (
    <div className="subContainer">
      <div
        style={{
          width: 70,
          height: 70,
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        <CircularProgressbarWithChildren
          value={data.stepsWalked}
          maxValue={data.stepsTarget}
          strokeWidth={11}
          counterClockwise={true}
          styles={buildStyles({
            strokeLinecap: "butt",
            textColor: "white",
            pathColor: "#7fd18c",
            trailColor: "white",
          })}
        >
          <h4>{data.stepsWalked}</h4>
          <p className={classes.walked}>walked</p>
        </CircularProgressbarWithChildren>
      </div>
      <div className={classes.step}>
        <button className="button-s" onClick={stepIncrementHandler}>
          <b>+</b>
        </button>
        <div className={classes.info}>
          <h3>{steps}k</h3>
          <h4>target</h4>
        </div>
        <button className="button-s" onClick={stepDecrementHandler}>
          <b>-</b>
        </button>
      </div>
    </div>
  );
};

export default StepCount;
