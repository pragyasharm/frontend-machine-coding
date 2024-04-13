import React from 'react'
import { Outlet } from 'react-router'
import ProductFooter from '../ProductFooter'
import ProductHeader from '../ProductHeader';

const LandingPageLayout = () => {
  return (
    <div>
      <ProductHeader />
        <Outlet />
      <ProductFooter />
    </div>
  )
}

export default LandingPageLayout