import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
import Beatmaker from "../pages/admin/Beatmaker";
import MerchManagement from "../pages/admin/MerchManagement";
import ComicManagment from "../pages/admin/ComicManagment";
import AdminGames from "../pages/admin/Games";
import UploadAssets from "../pages/admin/UploadAssets";
import AdminMobileBlock from "../components/AdminMobileBlock";
import ShopList from "../pages/Merch/shoplist";


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
      <Route path="/comics/chapter/:chapterNumber" element={<Comicview />} />
      <Route path="/comics/read" element={<Comicread />} />
      <Route path="/shop-list" element={<ShopList />} />
      <Route path="/merch" element={<Merch />} />
      <Route path="/buyshirt" element={<BuyShirt />} />

      {/* Admin Routes */}
      {/* Redirect /admin to login */}
      <Route path="/admin" element={<AdminMobileBlock><Navigate to="/admin/login" replace /></AdminMobileBlock>} />
      
      {/* Admin login route - Blocked on Mobile */}
      <Route path="/admin/login" element={<AdminMobileBlock><AdminLogin /></AdminMobileBlock>} />
      
      {/* Admin Dashboard Routes - Blocked on Mobile */}
      <Route path="/admin/dashboard" element={<AdminMobileBlock><DashboardLayout /></AdminMobileBlock>}>
        <Route index element={<Dashboard />} />
      </Route>
      
      <Route path="/admin/beatmaker" element={<AdminMobileBlock><DashboardLayout /></AdminMobileBlock>}>
        <Route index element={<Beatmaker />} />
      </Route>
      
      <Route path="/admin/merch-management" element={<AdminMobileBlock><DashboardLayout /></AdminMobileBlock>}>
        <Route index element={<MerchManagement />} />
      </Route>
      
      <Route path="/admin/comic-management" element={<AdminMobileBlock><DashboardLayout /></AdminMobileBlock>}>
        <Route index element={<ComicManagment />} />
      </Route>
      
      <Route path="/admin/settings" element={<AdminMobileBlock><DashboardLayout /></AdminMobileBlock>}>
        <Route index element={<AdminProfileSettings />} />
      </Route>
      
      <Route path="/admin/games" element={<AdminMobileBlock><DashboardLayout /></AdminMobileBlock>}>
        <Route index element={<AdminGames />} />
      </Route>
      
      <Route path="/admin/upload-assets" element={<AdminMobileBlock><DashboardLayout /></AdminMobileBlock>}>
        <Route index element={<UploadAssets />} />
      </Route>
      
      <Route path="/admin/asset-management" element={<AdminMobileBlock><DashboardLayout /></AdminMobileBlock>}>
        <Route index element={<UploadAssets />} />
      </Route>

      <Route path="*" element={<div />} />
    </Routes>
  );
};

export default Router;