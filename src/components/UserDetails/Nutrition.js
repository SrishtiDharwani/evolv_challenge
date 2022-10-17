import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Macros from "../Tooltip/Macros";
import classes from "./StepCount.module.css";

const Nutrition = (props) => {
  const navigate = useNavigate();
  const totalConsumed =
    props.proteinConsumed + props.carbConsumed + props.fatConsumed;
  const proteinPerc = props.proteinConsumed / totalConsumed;
  const carbPerc = props.carbConsumed / totalConsumed;
  const fatPerc = props.fatConsumed / totalConsumed;
  const calTarget = Math.round((props.calorieTarget / 1000) * 10) / 10;
  const [cal, setCal] = useState(calTarget);
  const [tooltipShown, setTooltipShown] = useState(false);

  const updateCal = useCallback(async () => {
    try {
      await fetch(`http://localhost:5000/api/home/${props.userId}/cal`, {
        method: "PUT",
        body: JSON.stringify({ calorieTarget: cal, id: props.userId }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {}
  }, [cal, props.userId]);

  const calIncrementHandler = () => {
    setCal((prevCal) => (Number(prevCal) + 0.1).toFixed(1));
    updateCal();
  };

  const calDecrementHandler = () => {
    if (cal > 0.1) {
      setCal((prevCal) => (prevCal - 0.1).toFixed(1));
    } else {
      setCal(0);
    }
    updateCal();
  };

  const toNutritionPage = () => {
    navigate(`/${props.userId}/nutrition`);
  };

  return (
    <div className="subContainer">
      <Tippy
        style={{ background: "#333b44", width: "208px", height: "165px" }}
        visible={tooltipShown}
        placement="bottom"
        content={
          <Macros
            proteinTarget={props.proteinTarget}
            proteinConsumed={props.proteinConsumed}
            carbConsumed={props.carbConsumed}
            carbTarget={props.carbTarget}
            fatConsumed={props.fatConsumed}
            fatTarget={props.fatTarget}
          />
        }
      >
        <div
          style={{ width: 70, height: 70 }}
          className={classes.pieContainer}
          onMouseEnter={() => setTooltipShown(true)}
          onMouseOut={() => setTooltipShown(false)}
        >
          <PieChart
            data={[
              { title: "Protein", value: proteinPerc, color: "#F45C84" },
              { title: "Fats", value: fatPerc, color: "#03C6FA" },
              { title: "Carbs", value: carbPerc, color: "#F0C50F" },
            ]}
            totalValue={1}
            lineWidth={27}
          />
          <div className={classes.cals}>
            <h4>{props.calorieIntake}</h4>
            <p className={classes.walked}>calories</p>
          </div>
        </div>
      </Tippy>

      <div className={classes.step}>
        <button className="button-s" onClick={calIncrementHandler}>
          <b>+</b>
        </button>
        <div className={classes.info}>
          <h3>{cal}k</h3>
          <h4>target</h4>
        </div>
        <button className="button-s" onClick={calDecrementHandler}>
          <b>-</b>
        </button>
      </div>
      <div className={classes.next}>
        <button className="button-b" onClick={toNutritionPage}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Nutrition;
