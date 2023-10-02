import React from 'react';

// Router Dom
import { createBrowserRouter, createRoutesFromElements, Routes, Route, Router, RouterProvider, BrowserRouter } from "react-router-dom";

// Pages
import News from './pages/News'
import Guides from './pages/Guides'
import About from './pages/About'
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin'
import AdminCreate from '../src/pages/AdminCreate'
import NoMatch from './pages/NoMatch'
import NewsDetails from "./pages/NewsDetails";
import GuidesDetails from "./pages/GuidesDetails";
import AdminHome from './pages/AdminHome';
import AdminPerfil from './pages/AdminPerfil';
import AdminDashboard from './pages/AdminDashboard';

// Components
import ProtectedRoutes from "./components/ProtectedRoutes";

// Library
import { AuthProvider } from "react-auth-kit";
import { RequireAuth } from 'react-auth-kit'


// Styles
import './styles/Global.css'

function App() {
  return (
    <>
      <AuthProvider
        authType="cookie"
        authName="_auth"
        cookieDomain={window.location.hostname}
        cookieSecure={false}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/about" element={<About />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/news/:newId" element={<NewsDetails />} />
            <Route path="/guides/:guideId" element={<GuidesDetails />} />
            <Route path={'/admincreate'} element={
              <RequireAuth loginPath={'/adminlogin'}>
                <AdminCreate />
              </RequireAuth>
            } />
            <Route path={'/adminhome'} element={
              <RequireAuth loginPath={'/adminlogin'}>
                <AdminHome />
              </RequireAuth>
            } />
            <Route path={'/admindashboard'} element={
              <RequireAuth loginPath={'/adminlogin'}>
                <AdminDashboard />
              </RequireAuth>
            } />
            <Route path={'/adminperfil'} element={
              <RequireAuth loginPath={'/adminlogin'}>
                <AdminPerfil />
              </RequireAuth>
            } />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )

}

export default App
