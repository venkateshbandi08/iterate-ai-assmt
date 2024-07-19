import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
import PujaBookingsPage from "./pages/pujaBookingsPage/PujaBookingsPage";
import PujaOfferingsPage from "./pages/pujaOfferingsPage/PujaOfferingsPage";
import PujaDetailsPage from "./pages/pujaDetailsPage/PujaDetailsPage";
import PackageDetails from "./pages/packageDetails/PackageDetails";
import PujaApplicationPage from "./pages/pujaApplicationPage/PujaApplicationPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/puja-bookings" element={<PujaBookingsPage />} />
        <Route path="/puja-offerings" element={<PujaOfferingsPage />} />
        <Route path="/puja-details" element={<PujaDetailsPage />} />
        <Route path="/package-details" element={<PackageDetails />} />
        <Route path="/puja-application" element={<PujaApplicationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
