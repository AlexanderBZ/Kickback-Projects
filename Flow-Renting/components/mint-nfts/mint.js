import React from "react";
import classes from "./mint.module.css";

export default function Mint() {
  return (
    <div className={`${classes.container} ${classes.purchase}`}>
      <div className={classes.text}>
        <h1>Rent an NFT</h1>
        <h4>Use our protocol to easily rent your NFT out to someone</h4>
        <button>RENT NOW</button>
      </div>
      <img src="photos/NFT.png" />
    </div>
  );
}
