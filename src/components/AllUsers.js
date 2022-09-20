import React from "react";
import UserItem from "./UserDetails/UserItem";

const AllUsers = ({users}) => {
  return (
    <ul className="list">
      {users.length > 0 &&
        users.map((user) => (
          <UserItem
            key={user.id}
            userId={user.id}
            name={user.name}
            email={user.email}
            stepsWalked={user.stepsWalked}
            stepsTarget={user.stepsTarget}
            performedDate={user.performedDate}
            scheduledDate={user.scheduledDate}
            calorieIntake={user.calorieIntake}
            calorieTarget={user.calorieTarget}
            proteinConsumed={user.proteinConsumed}
            proteinTarget={user.proteinTarget}
            carbConsumed={user.carbConsumed}
            carbTarget={user.carbTarget}
            fatConsumed={user.fatConsumed}
            fatTarget={user.fatTarget}
            feedback={user.feedback}
          />
        ))}
    </ul>
  );
};

export default AllUsers;
