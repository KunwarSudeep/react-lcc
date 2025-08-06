import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer, Slide } from "react-toastify";
// import './index.css'

import App from "./App.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
  {/* <StrictMode> */}
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Slide}
    />
    <App />
  {/* </StrictMode> */}
  </>
);
