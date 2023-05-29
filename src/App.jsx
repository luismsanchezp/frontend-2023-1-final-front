import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WebRouter, AdminRouter } from "./router";
import { AuthProvider } from "./context";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AuthProvider element={<AdminRouter />}/>} />
        <Route path="/*" element={<WebRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
