import React from "react";
import Collapsable from "./Collapsable";

function Form(props) {
  return (
    <form className="form js-form form__wrapper" action="" method="POST">
      {/* <div className="form__wrapper"> */}
      <Collapsable name={props.name} value={props.name}/>
      {/*  </div> */}
    </form>
  );
}

export default Form;
