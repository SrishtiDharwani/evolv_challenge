import React from "react";
import { useNavigate } from "react-router-dom";

import done from "../../assets/d1.png";
import calender from "../../assets/d2.png";
import classes from "./DateContainer.module.css";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DateContainer = (props) => {
  const navigate = useNavigate();
  const performedDate = new Date(props.performedDate);
  const scheduledDate = new Date(props.scheduledDate);
  const today = new Date();

  const highlight =
    today.getDate() === scheduledDate.getDate() &&
    today.getMonth() === scheduledDate.getMonth() &&
    today.getYear() === scheduledDate.getYear();

  let element;
  if (props.feedback) {
    element = "!";
  } else {
    element = ">";
  }

  const toWorkoutPage = () => {
    navigate(`/${props.id}/workout`);
  };

  return (
    <div className={classes.date}>
      <div>
        <div className={classes.dateContainer}>
          <img src={done} alt="done" className={classes.image} />
          <p>{`${performedDate.getUTCDate()} ${
            months[performedDate.getUTCMonth()]
          }`}</p>
        </div>
        <div className={highlight ? classes.warn : classes.dateContainer}>
          <img src={calender} alt="cal" className={classes.image} />
          <p>{`${scheduledDate.getUTCDate()} ${
            months[scheduledDate.getUTCMonth()]
          }`}</p>
        </div>
      </div>
      <div>
        <button
          className={`button-b ${props.feedback ? "button-b-imp" : ""}`}
          onClick={toWorkoutPage}
        >
          {element}
        </button>
      </div>
    </div>
  );
};

export default DateContainer;
