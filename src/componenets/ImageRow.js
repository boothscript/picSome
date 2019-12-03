import React from 'react'
import Image from './Image'

function ImageRow(props) {

    const images = props.imgList.map((imgObj) => (
        <Image imgObj={imgObj} />
    ))

    return (
        <div className="img-row">
            <h2>{props.title}</h2>
            <div className="img-grid">
                {images}
            </div>
        </div>

    )
}

export default ImageRow