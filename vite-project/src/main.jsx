import React from "react";
// eslint-disable-next-line react/no-deprecated
import {render} from "react-dom";
import App from "./components/App.jsx";
import "./index.css";


 const container = document.getElementById("root");
render(
 <React.StrictMode>
 <App />
  </React.StrictMode>,
   container
 );
