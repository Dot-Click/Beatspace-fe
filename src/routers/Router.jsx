import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/start/Home";
import ListOfHorus from "../pages/start/list-of-horus";
import Beats from "../pages/Beats/Beats";
import BeatPlay from "../pages/Beats/beatplay";
import Games from "../pages/Games/Games";
import Comics from "../pages/Comics/comics";
import Selectcomic from "../pages/Comics/Selectcomic";
import Selectchapter from "../pages/Comics/Selectchapter";
import Merch from "../pages/Merch/merch";
import BuyShirt from "../pages/Merch/buyshirt";
import Comicview from "../pages/Comics/comicview";
import Comicread from "../pages/Comics/comicread";
import AdminLogin from "../pages/admin/AdminLogin";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/admin/Dashboard";
import AdminProfileSettings from "../pages/admin/AdminProfileSettings";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<ListOfHorus />} />
      <Route path="/beats" element={<Beats />} />
      <Route path="/beatplay" element={<BeatPlay />} />
      <Route path="/games" element={<Games />} />
      <Route path="/comics" element={<Comics />} />
      <Route path="/comics/select" element={<Selectcomic />} />
      <Route path="/comics/select-chapter" element={<Selectchapter />} />
      {/* New comic reader routes */}
      <Route path="/comics/chapter/:chapterNumber" element={<Comicview />} />
      <Route path="/comics/read" element={<Comicread />} />
      <Route path="/merch" element={<Merch />} />
      <Route path="/buyshirt" element={<BuyShirt />} />

      {/* Admin Routes */}
      {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
      
      {/* Admin Dashboard Routes with Layout */}
      {/* <Route path="/admin" element={<DashboardLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="settings" element={<AdminProfileSettings />} />
      </Route> */}

      <Route path="*" element={<div />} />
    </Routes>
  );
};

export default Router;
