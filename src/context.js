import React, { useState, useEffect } from 'react'


const Context = React.createContext()

function ContextProvider(props) {

    const [photoList, setPhotoList] = useState([])
    const [cartList, setCartList] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res => res.json())
            .then(data => setPhotoList(data))
    }, [])



    function favorite(id) {
        setPhotoList((prevList) => (
            prevList.map((item) => {
                if (item.id === id) {
                    return { ...item, isFavorite: !item.isFavorite }
                } else {
                    return item
                }
            }))

        )
    }

    function addToCart(obj) {
        setCartList((prevList) => {
            if (prevList.some(item => item.id === obj.id)) {
                return [...prevList]
            } else {
                return [...prevList, obj]
            }
        })

    }
    function removeFromCart(obj) {
        console.log('remove')
        setCartList(prevList => {
            return prevList.filter((item) => item.id !== obj.id)
        })
    }

    function clearCart() {
        console.log('clearing')
        setCartList([])
    }

    return (
        <Context.Provider value={{ photoList, favorite, addToCart, cartList, removeFromCart, clearCart }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }