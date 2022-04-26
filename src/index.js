import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import StyleGlobal from "./styleGlobal/styleGlobal";
import App from "./app/App";

ReactDOM.render(
    <BrowserRouter>
        <StyleGlobal />
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
