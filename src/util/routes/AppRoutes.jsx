import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Contact from '../../pages/userPages/Contact'

import Login from '../../pages/userPages/Login'

import Signup from '../../pages/userPages/Signup'
import Footer from '../../layouts/Footer';
import Navbar from '../../layouts/Navbar';
import { ToastContainer } from 'react-toastify';
import About from '../../pages/userPages/About'
import Sevices from "../../pages/userPages/Services"
import Dashboard from '../../pages/userPages/Dashboard';


const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ToastContainer />
      <Navbar />

      <main className="flex-1 pt-16 sm:pt-20 md:pt-24 lg:pt-20">
        <Outlet /> {/* Child routes will render here */}
      </main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/login", element: <Login /> },
      { path: "/contact", element: <Contact /> },
      {path: "/services", element: <Sevices />},
      { path: "/signup", element: <Signup /> },
      { path: "/about", element: <About/> },
    ]
  },

]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
