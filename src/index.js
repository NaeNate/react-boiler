import React from "react";
import { render } from "react-dom";
import AppRouter from "./AppRouter";
import "@csstools/normalize.css";
import "./styles/styles.scss";

render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
