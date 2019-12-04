import React, { useContext } from 'react'
import useHover from '../hooks/useHover'

import { Context } from '../context'

function Image(props) {


    const [isHovered, imgRef] = useHover()
    const [favHovered, favRef] = useHover()
    const [buyHovered, buyRef] = useHover()

    const { favorite, addToCart, cartList, removeFromCart } = useContext(Context)


    const favIcon = (
        props.imgObj.isFavorite ? "fill" :
            favHovered ? "fill" : "line"
    )
    const favStyle = {
        "display": props.imgObj.isFavorite ? "block" :
            isHovered ? "block" : "none"
    }

    const buyIcon = (
        buyHovered ? "fill" : "line"
    )
    const buyStyle = {
        "display": isImageInCart(props.imgObj.id) ? "block" :
            isHovered ? "block" : "none"
    }

    function isImageInCart(id) {
        return cartList.some((item) => item.id === id)
    }


    return (
        <div
            className="img-wrap"
            ref={imgRef}
        >
            <div className="image">
                <img key={props.imgObj.id} src={props.imgObj.url} alt="" />
            </div>
            <div
                className="img-overlay"
                style={{ "opacity": isHovered ? 0.2 : 0 }}
            >
                &nbsp;
            </div>
            <i
                ref={favRef}
                className={`ri-heart-${favIcon} icon-left`}
                style={favStyle}
                onClick={() => favorite(props.imgObj.id)}
            />
            <i
                ref={buyRef}
                className={`ri-add-circle-${buyIcon} icon-right`}
                style={buyStyle}
                onClick={() => {
                    if (isImageInCart(props.imgObj.id)) {
                        removeFromCart(props.imgObj)
                    } else {
                        addToCart(props.imgObj)
                    }
                }}
            />

        </div>
    )

}




export default Image