import React from 'react'
import './styles.css'
import MenuItem from './MenuItem'

const MenuList = ({ list }) => {

    return (
        <ul className='tree-list-container'>
            {list && list.length ? list.map((listItme) => (<MenuItem item={listItme} key={listItme.label} />)) : null}
        </ul>
    )
}

export default MenuList