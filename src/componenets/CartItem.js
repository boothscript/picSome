import React, { useContext } from 'react'
import { Context } from '../context'
import useHover from '../hooks/useHover'

function CartItem(props) {
    const { removeFromCart } = useContext(Context)
    const [trashHover, trashRef] = useHover()
    const binType = trashHover ? "fill" : "line"

    return (
        <div className="cart-item-row">
            <i
                ref={trashRef}
                className={`ri-delete-bin-6-${binType}`}
                onClick={() => removeFromCart(props.imgObj)}

            ></i>
            <img src={props.imgObj.url} alt="" />
            <p>{5.99.toLocaleString("en-GB", { style: 'currency', currency: 'GBP' })}</p>
        </div>
    )
}

export default CartItem