import React from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

function Navbar() {

    return (
        <div className="navbar bg-dark">
            <h1 ><Link className="text-white" to="/">picSome</Link></h1>
            <Link to="/cart"><i class="ri-shopping-cart-2-line text-white"></i></Link>
        </div>
    )
}

export default Navbar