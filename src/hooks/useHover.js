import { useState } from 'react'

function useHover() {

    const [isHovered, setIsHovered] = useState(false)

    function hoverOn() {
        setIsHovered(true)
    }

    function hoverOff() {
        setIsHovered(false)
    }

    return (
        [isHovered, hoverOn, hoverOff]
    )
}

export default useHover