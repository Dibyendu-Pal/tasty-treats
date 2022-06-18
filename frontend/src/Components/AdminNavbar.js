import React from 'react'

function AdminNavbar() {
    return (
        <nav class="nav flex-column mx-4 pt-4">
            <span className="navbar-brand" href="/" style={{ color: "red" }}>Admin Panel</span>

            <a class="nav-link active my-4" href="#">Items</a>
            <a class="nav-link my-4" href="#">Oders</a>
            <a class="nav-link my-4" href="#">Login</a>
        </nav>)
}

export default AdminNavbar