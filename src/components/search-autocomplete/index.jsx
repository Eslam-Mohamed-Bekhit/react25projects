import React, { useEffect, useState } from 'react'
import useFetch from '../../Hooks/fetchHook'
import Suggesstion from './suggesstion';

const AutoComplete = () => {
    const [users, setUsers] = useState([]);
    const [searchParam, setSearchParam] = useState('');
    const [filtered, setFiltered] = useState([])
    const [showDropDown, setShowDropDown] = useState(false)

    const [data, loading, error] = useFetch(`https://dummyjson.com/users`)

    const handleClick = (e) => {
        setSearchParam(e.target.innerText)
        setFiltered([])
    }
    const handleChange = (e) => {
        const query = e.target.value.trim().toLowerCase()
        setSearchParam(query)
        if (query && query.length) {
            const filterData = users && users.length
                ? users?.filter(user => user.trim().toLowerCase().startsWith(query))
                : [];
            setFiltered(filterData);
            setShowDropDown(true);
        } else {
            setShowDropDown(false);
        }
    }

    useEffect(() => {
        setUsers(data?.users?.map(user => user.firstName))
    }, [data?.users]);

    return (

        <div>

            <input
                type={'search'}
                id='search'
                name='search'
                onChange={handleChange}
                value={searchParam} />

            {showDropDown && <Suggesstion data={filtered} handleClick={handleClick} />}

        </div>
    )
}

export default AutoComplete