import React from 'react'
import { createBrowserRouter } from "react-router-dom"
import Contact from './pages/userPages/Contact'
import Login from './pages/userPages/Login'
import Signup from './pages/userPages/Signup'
import About from './pages/userPages/About'
import Services from "./pages/userPages/Services"
import Dashboard from './pages/userPages/Dashboard'
import Layouts from './layouts/Layouts' 

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />, 
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/contact", element: <Contact /> },
      { path: "/services", element: <Services /> },
      { path: "/about", element: <About /> },
    ]
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
])

export default AppRoutes;
