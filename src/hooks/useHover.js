import { useState, useRef, useEffect } from 'react'

function useHover() {

    const [isHovered, setIsHovered] = useState(false)
    const ref = useRef()

    function hoverOn() {
        setIsHovered(true)
    }

    function hoverOff() {
        setIsHovered(false)
    }
    useEffect(() => {
        ref.current.addEventListener("mouseenter", (() => hoverOn()))
        ref.current.addEventListener("mouseleave", (() => hoverOff()))

    }, [])

    return (
        [isHovered, ref]
    )
}

export default useHover