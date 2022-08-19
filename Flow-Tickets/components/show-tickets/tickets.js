import React from "react";
import classes from "./tickets.module.css";

export default function Tickets() {
  return (
    <div className={`${classes.container} ${classes.purchase}`}>
      <div className={classes.text}>
        <h1>Show your NFT</h1>
        <h4>
          Press display to show the metadata behind your nft and “expire” it
        </h4>
        <button>DISPLAY NOW</button>
        <div>
          <h4>Title - Super Cool nft</h4>
          <h4>Description - this is a super cool nft</h4>
          <h4>Status - active</h4>
        </div>
      </div>
      <img src="photos/Unlock-NFT.png" />
    </div>
  );
}
