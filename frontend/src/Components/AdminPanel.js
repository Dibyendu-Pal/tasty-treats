import React from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

function AdminPanel() {


    return (
        <>
            <AdminNavbar />
        </>
        // <nav className="navbar navbar-expand-lg bg-white">
        //     <div className="container-fluid">
        //         <span className="navbar-brand" href="/" style={{ color: "#488d1c" }}>Tasty Treats</span>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item me-4">
        //                     <Link id='home-link' className={`nav-link ${path === '/' ? "active" : ""} `} aria-current="page" to="/">Home</Link>
        //                 </li>
        //                 <li className="nav-item me-4">
        //                     <Link id='about-link' className={`nav-link ${path === '/about' ? "active" : ""} `} to="/about">About</Link>
        //                 </li>
        //                 <li className="nav-item me-4">
        //                     <Link id='menu-link' className={`nav-link ${path === '/items' ? "active" : ""} `} to="/items">Vegitables</Link>
        //                 </li>
        //                 <li className="nav-item me-4">
        //                     <Link id='contact-link' className={`nav-link ${path === '/contact' ? "active" : ""} `} to="/admin">Admin Panel</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default AdminPanel