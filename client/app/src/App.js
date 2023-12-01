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
  UserTopBar,

  // ! ADMIN PAGES
  AdminDashboard,
  AdminMember,
  AdminLogin,
  AdminTransaction,
  AdminNavBar,
} from "./pages/";

function App() {
  return (
    <div className="flex items-center w-screen h-screen justify-center bg-slate-200 overflow-auto">
    <div className={`relative h-screen bg-gradient-to-b xs:w-[100%] ss:w-[100%] sm:w-[100%] md:w-[100%]  lg:w-[30%]`}>
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
            <UserTopBar />
            <UserNavBar />
          </>
        } />

        { /* User Gym Session */}
        <Route path="/gym-session" element={
          <>
            <UserGymSession />
            <UserTopBar />
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
            <UserTopBar />
            <UserNavBar />
          </>
        } />

        {/* User History */}
        <Route path="/history" element={
          <>
            <UserHistory />
            <UserTopBar />
            <UserNavBar />
          </>
        } />

        {/* ========== ADMIN ========== */}
        {/* Admin Dashboard */}
        <Route path="/admin/" element={
          <>
            <AdminDashboard />
            <UserTopBar />
            <AdminNavBar />
          </>
        } />

        {/* Admin Transaction */}
        <Route path="/admin/transaction" element={
          <>
            <AdminTransaction />
            <UserTopBar />
            <AdminNavBar />
          </>
        } />

        {/* Admin Member */}
        <Route path="/admin/member" element={
          <>
            <AdminMember />
            <UserTopBar />
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
    </div>
    </div>
  );
}

export default App;
