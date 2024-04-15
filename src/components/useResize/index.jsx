import React from 'react'
import useWindowResize from '../../Hooks/useWindowResize'

const UseResize = () => {
    const sizeWindow = useWindowResize()
    const { width, height } = sizeWindow
    return (
        <div>
            <h1>
                resize hook
            </h1>
            <p>
                width : {width}
            </p>
            <p>
                height : {height}
            </p>
        </div>
    )
}

export default UseResize