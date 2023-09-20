import React from "react";
import { createContext } from "vm";

const FirstName = createContext();
function ParentComp() {
  return (
    <>
      <FirstName.Provider value={"Khushboo"}></FirstName.Provider>
    </>
  );
}

export default ParentComp;
export { FirstName };
