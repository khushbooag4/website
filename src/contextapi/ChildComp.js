import React from "react";
import { FirstName } from "./ParentComp";

function ChildComp() {
  return (
    <>
      <FirstName.Consumer></FirstName.Consumer>
    </>
  );
}

export default ChildComp;
