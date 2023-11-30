import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {
  // ? USER PAGES
  UserDashboard,
  UserGymSession,
  UserPoin,
  UserHistory,
  UserLogin,
  UserRegister,
  UserOrderSummary,
  UserNavBar,

  // ! ADMIN PAGES
  AdminDashboard,
  AdminMember,
  AdminLogin,
  AdminTransaction,
  AdminNavBar,
} from "./pages/";

function App() {
  return (
    <Router>
      <Routes>
        {/* ========== USER ========== */}
        {/* User Register */}
        <Route path="/register" element={
          <>
            <UserRegister />
          </>
        } />

        {/* User Login */}
        <Route path="/login" element={
          <>
            <UserLogin />
          </>
        } />

        {/* User Dashboard */}
        <Route path="/" element={
          <>
            <UserDashboard />
            <UserNavBar />
          </>
        } />

        { /* User Gym Session */}
        <Route path="/gym-session" element={
          <>
            <UserGymSession />
            <UserNavBar />
          </>
        } />

        { /* User Order Summary */}
        <Route path="/order-summary" element={
          <>
            <UserOrderSummary />
          </>
        } />

        {/* User Poin */}
        <Route path="/user-poin" element={
          <>
            <UserPoin />
            <UserNavBar />
          </>
        } />

        {/* User History */}
        <Route path="/history" element={
          <>
            <UserHistory />
            <UserNavBar />
          </>
        } />

        {/* ========== ADMIN ========== */}
        {/* Admin Dashboard */}
        <Route path="/admin/" element={
          <>
            <AdminDashboard />
            <AdminNavBar />
          </>
        } />

        {/* Admin Transaction */}
        <Route path="/admin/transaction" element={
          <>
            <AdminTransaction />
            <AdminNavBar />
          </>
        } />

        {/* Admin Member */}
        <Route path="/admin/member" element={
          <>
            <AdminMember />
            <AdminNavBar />
          </>
        } />

        {/* Admin Login */}
        <Route path="/admin/login" element={
          <>
            <AdminLogin />
          </>
        } />

        <Route path="*" element={<div>Route Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
