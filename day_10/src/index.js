import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ImageRotator from "./ImageRotator";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <>
        <App />
        <ImageRotator />
    </>
);