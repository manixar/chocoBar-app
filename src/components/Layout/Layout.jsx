import React from 'react'
import Header from "./Header/header";

const Layout = ({ children }) => (
    <div>
      <Header />
        {children}
    </div>
)
export default Layout