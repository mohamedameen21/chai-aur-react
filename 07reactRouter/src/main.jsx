import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home/Home.jsx";
import { StrictMode, lazy, useState, useEffect } from "react";

const About = lazy(() => import("./components/Home/About.jsx"));


const DelayedSuspense = ({ children, fallback, delay }) => {
  const [showFallback, setShowFallback] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowFallback(false), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return showFallback ? fallback : children;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route
            path="/about"
            element={
              <DelayedSuspense fallback={<div>Loading...</div>} delay={1000}>
                <About />
              </DelayedSuspense>
            }
          ></Route>
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
