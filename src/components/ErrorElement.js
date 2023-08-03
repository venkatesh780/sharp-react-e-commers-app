import classes from "./ErrorElement.module.css";
import React from "react";

const ErrorElement = (props) => {
  return (
    <div className={classes.error}>
      <div>
        <p>Somthing went wrong....</p>
        <button onClick={props.onCancel}>cancel</button>
      </div>
    </div>
  );
};

export default React.memo(ErrorElement);
