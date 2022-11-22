
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//There's no way to disable mixed content using javascript but you can add this tag
//<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
fetch('https://www.omdbapi.com?apikey=ff339da0', {
    // ...
    referrerPolicy: "origin-when-cross-origin" 
    
});

//Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>