

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

import App from "./App";
import Home from "./pages/Home";
import RoomDetail from "./pages/RoomDetail";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="room/:id" element={<RoomDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);