import React from "react";
import ReactDOM from 'react-dom/client';
import pizzaData from "../public/data";
import { App, Pizza } from "../components/mainComponents";
// React Version 18 Rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Pizza />
        <App /> 
    </React.StrictMode>
);

// React Version 18 Rendering
// ReactDOM.render(<App />);

//Components: data, logic and appearance
