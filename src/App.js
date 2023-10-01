import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Venues from "./components/Venues";
import RouteNotFound from "./components/RouteNotFound";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Unauthorized from "./components/Unauthorized";
import Venue from "./components/Venue";
import ManageVenues from "./components/Profile/ManageVenues";
import NewVenue from "./components/Profile/NewVenue";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Venues />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/manage" element={<ManageVenues />} />
          <Route path="/profile/manage/create" element={<NewVenue />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
