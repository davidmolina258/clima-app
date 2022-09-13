import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <span className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </span>
  );
};

export default Loader;
