import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from  "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducer";

const store = configureStore({
  reducer : rootReducer
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

  <Provider store={store}>
    <BrowserRouter>
        <Toaster/>
        <App></App>
    </BrowserRouter>
  </Provider>
    
    
    
  </React.StrictMode>
);