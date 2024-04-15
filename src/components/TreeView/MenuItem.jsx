import React, { useState } from 'react'
import MenuList from './MenuList'
import './styles.css'
import { FaMinus, FaPlus } from 'react-icons/fa'

const MenuItem = ({ item }) => {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState(false);
    const handleToggleChildren = () => {
        setDisplayCurrentChildren(!displayCurrentChildren)

    }
    console.log(displayCurrentChildren)
    return (
        <li className='menu-item'>
            <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 10 }}>
                <p>{item.label}</p>
                {item && item.children && item.children.length && <span style={{ cursor: 'pointer' }}
                    onClick={() => handleToggleChildren()}>
                    {
                        displayCurrentChildren ?
                            <FaMinus size={15} color="white" style={{ cursor: "pointer" }} onClick={() => setDisplayCurrentChildren(!displayCurrentChildren)} /> :
                            <FaPlus size={15} color="white" style={{ cursor: "pointer" }} onClick={() => setDisplayCurrentChildren(!displayCurrentChildren)} />
                    }
                </span>
                }
            </div>


            {item && item.children && item.children.length && displayCurrentChildren ?
                <MenuList key={item.label} list={item.children} />
                : null}

        </li>
    )
}

export default MenuItem