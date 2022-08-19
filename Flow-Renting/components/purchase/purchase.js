import React from "react";
import classes from "./purchase.module.css";

export default function Purchase() {
  return (
    <div className={`${classes.container} ${classes.purchase}`}>
      <div className={classes.text}>
        <h1>JOIN KICKBACK</h1>
        <h4>BUY AN NFT AND JOIN THE FAN COMMMUNITY FOR EXCLUSIVE PERKS</h4>
        <button>BUY NOW</button>
      </div>
      <img src="photos/NFT.png" />
    </div>
  );
}
