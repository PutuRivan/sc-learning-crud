import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navigation-Bar/Navbar'

export default function AuthLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
