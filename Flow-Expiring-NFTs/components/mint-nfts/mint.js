import React from "react";
import classes from "./mint.module.css";

export default function Mint() {
  return (
    <div className={`${classes.container} ${classes.purchase}`}>
      <div className={classes.text}>
        <h1>Join Kickback</h1>
        <h4>Buy an NFT and join the fan community for exlusive perks</h4>
        <button>MINT NOW</button>
      </div>
      <img src="photos/NFT.png" />
    </div>
  );
}
