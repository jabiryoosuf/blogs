import React from 'react'
import Topbar from '../Topbar/Topbar'
import { Outlet } from 'react-router-dom/dist'

const Layout = () => {
  return (
    <div>
      <Topbar/>
      <Outlet/>
    </div>
  )
}

export default Layout
