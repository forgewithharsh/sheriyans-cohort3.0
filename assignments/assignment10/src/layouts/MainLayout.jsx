import React from 'react'
import { Outlet } from 'react-router'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div>
<nav>
  <Navbar/>
</nav>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default MainLayout
