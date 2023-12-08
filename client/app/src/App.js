import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import {
  // ? USER PAGES
  UserDashboard,
  UserGymSession,
  UserPoin,
  UserHistory,
  UserLogin,
  UserRegister,
  UserOrderSummary,
  UserMember,
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
  const setSessionData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const getSessionData = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };  

  return (
    <div className="flex items-center w-screen h-screen justify-center bg-slate-200 overflow-auto">
    <div className={`relative h-screen bg-gradient-to-b xs:w-[100%] ss:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[30%]`}>
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
            <UserLogin setSessionData={setSessionData}/>
          </>
        } />

        {/* User Dashboard */}
        <Route path="/" element={
          <>
            <UserDashboard />
            <UserTopBar userSession={getSessionData('userSession')} />
            <UserNavBar />
          </>
        } />

        {/* User Member */}
        <Route path="/membership" element={
          <>
            <UserMember userSession={getSessionData('userSession')} />
            <UserTopBar userSession={getSessionData('userSession')} />
            <UserNavBar />
          </>
        } />

        { /* User Gym Session */}
        <Route path="/gym-session" element={
          <>
            <UserGymSession userSession={getSessionData('userSession')} />
            <UserTopBar userSession={getSessionData('userSession')} />
            <UserNavBar />
          </>
        } />

        { /* User Order Summary */}
        <Route path="/order-summary/:idSession" element={
          <>
            <UserOrderSummary />
          </>
        } />

        {/* User Poin */}
        <Route path="/user-poin" element={
          <>
            <UserPoin />
            <UserTopBar userSession={getSessionData('userSession')} />
            <UserNavBar />
          </>
        } />

        {/* User History */}
        <Route path="/history" element={
          <>
            <UserHistory />
            <UserTopBar userSession={getSessionData('userSession')} />
            <UserNavBar />
          </>
        } />

        {/* ========== ADMIN ========== */}
        {/* Admin Dashboard */}
        <Route path="/admin/" element={
          <>
            <AdminDashboard />
            <UserTopBar userSession={getSessionData('userSession')} />
            <AdminNavBar />
          </>
        } />

        {/* Admin Transaction */}
        <Route path="/admin/transaction" element={
          <>
            <AdminTransaction />
            <UserTopBar userSession={getSessionData('userSession')} />
            <AdminNavBar />
          </>
        } />

        {/* Admin Member */}
        <Route path="/admin/member" element={
          <>
            <AdminMember />
            <UserTopBar userSession={getSessionData('userSession')} />
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
