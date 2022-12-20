import React from "react";
import "./style.css";
import { Fragment } from "react";

const ImgRonde = (props) => {
  return (
    <Fragment>
      <img className="img_ronde" src={props.img} alt="voiture"></img>
    </Fragment>
  );
};
export default ImgRonde;
