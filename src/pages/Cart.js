import React, { useContext, useRef, useState } from 'react'
import { Context } from '../context'

import CartItem from '../componenets/CartItem'

function Cart() {
    const { cartList, clearCart } = useContext(Context)
    const buyRef = useRef()
    const [buttonText, setButtonText] = useState("Buy Now!")

    const cartItems = cartList.map((item) => (
        <CartItem key={item.id} imgObj={item} />
    ))

    function fakeBuy() {
        setButtonText("Ordering...")
        setTimeout(() => {
            clearCart()
            setButtonText("Buy Now!")
        }, 3000)
    }

    return (
        <div>
            <h1>Cart Page</h1>
            {cartItems}
            <div className="row">
                <h2>
                    {`Total: ${(cartList.length * 5.99).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`}
                </h2>
            </div>
            <div class="row">
                {(cartList.length > 0) ? <button className="buy" ref={buyRef} onClick={fakeBuy}>{buttonText}</button> : null}
            </div>
        </div>

    )
}

export default Cart