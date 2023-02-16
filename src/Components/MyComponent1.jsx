import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ChlidComponent from "./ChlidComponent";

const MyComponent1 = () => {
  const [state, setState] = useState(0);
  // console.log(state);

  // useEffect(() => {
  //   if (!state) {
  //     setState("abc");
  //   }
  // }, [state]);
  // (function () {
  //   if (state !== "abc") {
  //     setState("abc");
  //     console.log("in functions");
  //   }
  // })();
  // const childComponent =
  // const myMemo = useMemo(() => {
  //   console.log("in memo ");
  //   return myFunction;
  // }, [state]);

  // const myFunction = () => {
  //   // console.log("in Functioin ");
  //   return state + state;
  // };
  // useMemo(() => {
  //   console.log("in Memo ");
  //   console.log(myFunction());
  // }, []);
  // console.log(myMemo);

  // useEffect(() => {
  //   console.log("in Effect ");
  //   console.log(myFunction());
  // }, [state]);

  // useEffect(() => {
  //   childComponent;
  // }, [state]);

  // setState("abd");
  let arr = [1, 2, 3];
  console.log(arr.reduce((a, b, c) => a + b + c));
  return (
    <div>
      MyComponent1
      <button onClick={() => setState(state + 1)}> Add</button>
      {state}
      {/* {childComponent} */}
    </div>
  );
};

export default MyComponent1;
