import React from 'react'
import MenuList from './MenuList'
import './styles.css'
const TreeView = ({ menus }) => {
    console.log(menus)

    return (
        <div className='menu-list-container'>
            <MenuList list={menus} />
        </div>
    )
}

export default TreeView