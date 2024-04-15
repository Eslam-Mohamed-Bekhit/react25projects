import React, { useState } from 'react'
import "./styles.css"
import { FaStar } from "react-icons/fa"
const StarRating = ({ stars }) => {
    const [hover, setHover] = useState(0);
    const [rating, setRating] = useState(0);

    const handleClick = (currr) => { setRating(currr) }
    const handleOver = (currr) => {
        setHover(currr)
    }
    const handleLeave = () => { setHover(rating) }
    return (
        <div>
            {
                [...Array(stars)].map((_, index) => {
                    index += 1
                    return (<FaStar
                        key={index}
                        className={index <= hover ? "active" : "inactive"}
                        onClick={() => { handleClick(index) }}
                        onMouseLeave={() => { handleLeave(index) }}
                        onMouseMove={() => { handleOver(index) }}
                        size={40}
                    />)
                })}
        </div>
    )
}

export default StarRating