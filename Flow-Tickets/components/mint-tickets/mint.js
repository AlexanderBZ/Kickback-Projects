import React from "react";
import classes from "./mint.module.css";

export default function Mint() {
  return (
    <div className={`${classes.container} ${classes.mint}`}>
      <div className={classes.text}>
        <h1>Join Kickback</h1>
        <h4>Mint an NFT and join the fan community for exclusive perks</h4>
        <button>MINT NOW</button>
      </div>
      <img src="photos/NFT.png" />
    </div>
  );
}
