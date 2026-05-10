import React from "react";
import style from "./Btn.module.css";

const Btn = (props) => {
  return (
    <div className={style.btnContainer}>
      <button
        className={style.btn}
        onClick={() => (window.location.href = "#contentFlow")}
      >
        <div className={style.overlay}></div>
        <span className={style.textContainer}>{props.txt}</span>
      </button>
    </div>
  );
};

export default Btn;
