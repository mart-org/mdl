import React from "react";
import ReactDOM from "react-dom/client";
import * as Lib from "mart-dl";
import { Button } from "../src";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <>
    <Lib.Button onClick={() => {}} text="In npm" />
    <Button onClick={() => {}} text="In Local" />
  </>
);
