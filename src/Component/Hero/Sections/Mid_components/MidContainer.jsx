import React from "react";
import styles from "./MidContainer.module.css";
import Content from "./Content";
import Overlay from "./Overlay";
import ImageGridBG from "./ImageGridBG";

const MidContainer = () => {
  return (
    <div className={styles.mid_container}>
      <ImageGridBG />
      {/* <Overlay />
      <Content /> */}
    </div>
  );
};

export default MidContainer;
