import React, { useState } from 'react'


const Context = React.createContext()

function ContextProvider(props) {

    const [photoList, setPhotoList] = useState([1, 2, "test"])

    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        .then(res => res.json())
        .then(data => setPhotoList(data))


    return (
        <Context.Provider value={photoList}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }