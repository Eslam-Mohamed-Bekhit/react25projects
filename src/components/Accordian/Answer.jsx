import React from 'react'
import './styles.css'
const Answer = ({ el }) => {
    console.log(el.split(',').length)


    console.log(!(el.split(',').length > 1))

    console.log(el)


    return (
        <div>
            {!(el.split(',').length > 1) ?
                (<p className='title'>{el}</p>) : (<div>{el.split(' , ').map((item, i) =>
                    (<div style={{ textAlign: 'left' }} key={i} className='title'> {`${i + 1} - ${item} `} </div>))} </div>)
            }</div>
    )
}

export default Answer