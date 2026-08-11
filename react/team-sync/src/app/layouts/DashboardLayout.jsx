import React from 'react'
import { Outlet } from 'react-router'

const DashboardLayout = () => {
  return (
    <div>
      This is navbar
      <Outlet/>
    </div>
  )
}

export default DashboardLayout
