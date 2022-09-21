import React from "react";
import Bell from '../../assets/bell.png';

import classes from './BellIcon.module.css'

const BellIcon = ({dropdown}) => {
  return <div className={`${classes.bell} ${dropdown?classes.bigImg:''}`}>
    <img src={Bell} alt='bellIcon' className={classes.bellImg}></img>
  </div>;
};

export default BellIcon;
