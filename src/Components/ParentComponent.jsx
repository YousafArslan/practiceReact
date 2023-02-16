import React from "react";
import { useState } from "react";
import ChlidComponent from "./ChlidComponent";

const ParentComponent = () => {
  const [state, setState] = useState();
  setState("abc");
  return (
    <div>
      ParentComponent
      {/* {state} */}
      {/* <ChlidComponent /> */}
    </div>
  );
};

export default ParentComponent;
