

import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            {/* <header>
                <nav>
                    <Link to="/random-user">User</Link>
                    <Link to="/random-jokes">Jokes</Link>
                    <Link to="/cats-listing">Cat Listing</Link>
                </nav>
            </header> */}
            <Outlet />
        </>
    )
}

export default Layout