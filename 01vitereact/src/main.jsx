import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>My App</h1>
    </div>
  );
}

// const reactElemnt = {
//   type: "a",
//   props: {
//     href: "http://google.com",
//     target: "_blank",
//   },
//   children: "Click me",
// };

const anotherElement = (
  <a href="http://google.com" target="_blank">
    Click me
  </a>
);

const reactElement = React.createElement("a", {
  href: "http://google.com",
  target: "_blank",
}, 'Click me');

console.log(reactElement);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <MyApp />
  // </StrictMode>

  reactElement
); 
