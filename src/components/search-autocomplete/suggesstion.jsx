import React from 'react'

const Suggesstion = ({ data, handleClick }) => {

    console.log('sugg data : ', data)
    return (
        <ul>
            {
                data && data.length ? data.map((item, index) =>
                    <li onClick={handleClick} style={{ cursor: 'pointer' }} key={index}>{item}</li>
                ) : <li></li>

            }
        </ul>
    )
}

export default Suggesstion