import React from "react";
import classes from "./nfts.module.css";

export default function Tickets() {
  return (
    <div className={`${classes.container} ${classes.nfts}`}>
      <div className={classes.text}>
        <h1>Your NFTs:</h1>
      </div>
      <div className={classes.grid}>
        <img src="photos/Unlock-NFT.png" />
        <img src="photos/Unlock-NFT.png" />
        <img src="photos/Unlock-NFT.png" />
        <img src="photos/Unlock-NFT.png" />
      </div>
    </div>
  );
}
