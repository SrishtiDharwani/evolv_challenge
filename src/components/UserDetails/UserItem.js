import React, { useState } from "react";
import StepCount from "./StepCount";
import DateContainer from "./DateContainer";
import Nutrition from "./Nutrition";
import BellIcon from "./BellIcon";
import profile from "../../assets/profile.png";
import DumbbellImg from "../../assets/dumbbell.png";
import NutritionImg from "../../assets/nutrition.png";
import StepImg from "../../assets/step.png";
import Arrow from "../../assets/down.png";
import Up from "../../assets/up.png";

import classes from "./UserItem.module.css";

const UserItem = (users) => {
  const [dropDownShown, setDropdownShown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  const dropdownToggler = () => {
    setDropdownShown((prevState) => !prevState);
  };

  return (
    <div
      className={`${classes.item} ${windowWidth <= 927 && classes.dropdown} ${
        dropDownShown && classes.expand
      } `}
    >
      <div className={classes.detailsContainer}>
        <div className={classes.image}>
          <img src={profile} alt={users.name} className={classes.profile}></img>
        </div>

        <div className={classes.details}>
          <h3>{users.name}</h3>
          <p>{users.email}</p>
        </div>
      </div>
      {windowWidth <= 927 && !dropDownShown && (
        <button className={classes.dropdownButton} onClick={dropdownToggler}>
          <img src={Arrow} alt="open"></img>
        </button>
      )}
      {windowWidth <= 927 && dropDownShown && (
        <button className={classes.dropdownButton} onClick={dropdownToggler}>
          <img src={Up} alt="close"></img>
        </button>
      )}
      {(windowWidth > 927 || dropDownShown) && (
        <React.Fragment>
          {windowWidth <= 927 && (
            <div className={classes.division}>
              <div className={classes.title}>
                <img src={StepImg} className="dumbbell" alt="icon" />
                <p>Steps</p>
              </div>
            </div>
          )}
          <StepCount
            userId={users.userId}
            stepsWalked={users.stepsWalked}
            stepsTarget={users.stepsTarget}
          />
          {windowWidth <= 927 && (
            <div className={classes.division}>
              <div className={classes.title}>
                <img src={DumbbellImg} className="dumbbell" alt="icon" />
                <p>Workout</p>
              </div>
            </div>
          )}
          <DateContainer
            performedDate={users.performedDate}
            scheduledDate={users.scheduledDate}
            feedback={users.feedback}
            id={users.userId}
          />
          {windowWidth <= 927 && (
            <div className={classes.division}>
              <div className={classes.title}>
                <img src={NutritionImg} className="dumbbell" alt="icon" />
                <p>Nutrition</p>
              </div>
            </div>
          )}
          <Nutrition
            userId={users.userId}
            calorieIntake={users.calorieIntake}
            calorieTarget={users.calorieTarget}
            proteinConsumed={users.proteinConsumed}
            proteinTarget={users.proteinTarget}
            carbConsumed={users.carbConsumed}
            carbTarget={users.carbTarget}
            fatConsumed={users.fatConsumed}
            fatTarget={users.fatTarget}
          />
          <BellIcon dropdown={dropDownShown} />
        </React.Fragment>
      )}
    </div>
  );
};

export default UserItem;
