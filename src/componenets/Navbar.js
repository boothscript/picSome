import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import { Context } from '../context'

function Navbar() {
    const { cartList } = useContext(Context)
    const fillType = (cartList.length > 0) ? "fill" : "line"
    return (
        <div className="navbar bg-dark">
            <h1 ><Link className="text-white" to="/">picSome</Link></h1>
            <Link to="/cart"><i className={`ri-shopping-cart-2-${fillType} text-white`} ></i></Link>
        </div>
    )
}

export default Navbar