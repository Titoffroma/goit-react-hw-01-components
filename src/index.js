import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import randomizeBgColor from "./randomColors";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const statItems = document.querySelectorAll("li[class^=Statistics_item]");

statItems.forEach((item) => {
  item.style.background = randomizeBgColor();
  item.style.width = `calc(100% / ${statItems.length})`;
});
