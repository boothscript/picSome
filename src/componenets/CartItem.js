import React, { useContext } from 'react'
import { Context } from '../context'
import useHover from '../hooks/useHover'

function CartItem(props) {
    const { removeFromCart } = useContext(Context)
    const [isHovered, hoverOn, hoverOff] = useHover()
    const binType = isHovered ? "fill" : "line"

    return (
        <div className="cart-item-row">
            <i
                className={`ri-delete-bin-6-${binType}`}
                onClick={() => removeFromCart(props.imgObj)}
                onMouseEnter={hoverOn}
                onMouseLeave={hoverOff}
            ></i>
            <img src={props.imgObj.url} alt="" />
            <p>{5.99.toLocaleString("en-GB", { style: 'currency', currency: 'GBP' })}</p>
        </div>
    )
}

export default CartItem