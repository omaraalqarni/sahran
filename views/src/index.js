import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


document.addEventListener("DOMContentLoaded", getLocation);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


function getLocation() {
  navigator.geolocation.getCurrentPosition((position) => {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const data = {lat, lon}
    const options = {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
    fetch('/', options).then(res => console.log(res))
  });
}

