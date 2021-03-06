import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { ResetStyles } from "./styles/ResetStyles";
import { GlobalStyles } from "./styles/GlobalStyles";

import "./styles/animations.css";

ReactDOM.render(
    <React.StrictMode>
        <ResetStyles />
        <GlobalStyles />

        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
