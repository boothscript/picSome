import React, { useContext, useState } from 'react'
import { Context } from '../context'

import CartItem from '../componenets/CartItem'


function Cart() {
    const { cartList, clearCart } = useContext(Context)
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
            {
                (cartList.length > 0) ?
                    <>
                        {cartItems}
                        <div className="row">
                            <h2>
                                {`Total: ${(cartList.length * 5.99).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`}
                            </h2>
                        </div>
                        <div className="row">
                            <button className="buy" onClick={fakeBuy}>{buttonText}</button>
                        </div>
                    </> :
                    <p>You have no items in your cart</p>
            }
        </div>

    )
}

export default Cart