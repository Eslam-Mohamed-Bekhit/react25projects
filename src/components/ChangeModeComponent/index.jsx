import React from 'react'
import { useChangeHook } from './../../Hooks'
import './styles.css'
const ChangeModeComponent = () => {
    const [value, setValue] = useChangeHook();
    const handleChange = () => {
        setValue(value === 'dark' ? 'light' : 'dark')

    }
    console.log(value)

    return (
        <div data-mode={value} className='button-light-dark'>
            <h1>ChangeMode</h1>
            <button

                style={{ width: "200px", borderRadius: "5px", fontSize: "15px", fontWeight: "bold" }}
                onClick={handleChange}>Change
            </button>
            <p>{value}</p>
        </div>
    )
}

export default ChangeModeComponent