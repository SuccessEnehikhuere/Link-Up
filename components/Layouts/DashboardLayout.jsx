import React from 'react'
import AuthLayout from './AuthLayout'
import Navbar from '../Navbar/Nav'


const DashboardLayout = ({ children }) => {
  return (
    <>
      <AuthLayout>
        <Navbar />
        {children}
      </AuthLayout>
    </>
  )
}

export default DashboardLayout
