import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
      This is navbar
      <Outlet/>
    </div>
  )
}

export default MainLayout
