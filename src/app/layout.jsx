import React from 'react'
import Header from './component/Header'
import Tabs from './component/Tabs'
import "./globals.css"
import Providers from './Providers'

const Layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Providers>
            <Header />
            <Tabs />
            {children}
            </Providers>
        </body>
    </html>
  )
}

export default Layout