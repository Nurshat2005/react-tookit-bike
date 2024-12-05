import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/index.jsx";
import AuthContext from "./components/context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <BrowserRouter>
  <AuthContext>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthContext>
  </BrowserRouter>
);
