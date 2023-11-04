import React from "react";
import ReactDOM from "react-dom/client";
import * as lib from "react-dev-lib";
import { Button } from "../src/index";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <>
    <lib.Button text="In npm" />
    <Button text="Local" />
  </>
);
