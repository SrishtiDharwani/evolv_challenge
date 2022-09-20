import React from "react";
import StepCount from "./StepCount";
import DateContainer from "./DateContainer";
import Nutrition from "./Nutrition";
import BellIcon from "./BellIcon";
import profile from "../../assets/profile.png";

import classes from "./UserItem.module.css";

const UserItem = (users) => {
  return (
    <div className={classes.item}>
      <div className={classes.detailsContainer}>
        <div className={classes.image}>
          <img src={profile} alt={users.name} className={classes.profile}></img>
        </div>

        <div className={classes.details}>
          <h3>{users.name}</h3>
          <p>{users.email}</p>
        </div>
      </div>

      <StepCount
        userId={users.userId}
        stepsWalked={users.stepsWalked}
        stepsTarget={users.stepsTarget}
      />
      <DateContainer
        performedDate={users.performedDate}
        scheduledDate={users.scheduledDate}
        feedback={users.feedback}
        id={users.userId}
      />
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
      <BellIcon />
    </div>
  );
};

export default UserItem;
