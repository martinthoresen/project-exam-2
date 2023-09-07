import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Venues from "./components/Venues";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Venues />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
