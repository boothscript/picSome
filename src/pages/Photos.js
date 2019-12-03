import React, { useContext } from 'react'

import { Context } from '../context'
import ImageRow from '../componenets/ImageRow'



function Photos() {
    const { photoList } = useContext(Context)
    const arrayChunks = []

    // splits array into chunks for image rows
    var i, j, temparray, chunk = 10
    for (i = 0, j = photoList.length; i < j; i += chunk) {
        temparray = photoList.slice(i, i + chunk)
        arrayChunks.push(temparray)
    }

    const imageRows = arrayChunks.map((arrayChunk) => (
        <ImageRow title="heading" imgList={arrayChunk} />
    ))

    return (
        <>
            <h1>Photos Page</h1>
            {imageRows}
        </>
    )
}

export default Photos