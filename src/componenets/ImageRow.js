import React from 'react'

function ImageRow(props) {

    const images = props.imgList.map((imgObj) => (
        <img key={imgObj.id} src={imgObj.url} alt="" />
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