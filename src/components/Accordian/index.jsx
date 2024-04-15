import React, { useState, useEffect } from 'react'
import data from "../../data/qa.json"
import Answer from './Answer';
import "./styles.css"
import style from "./styles.css"
import { FaPlus, FaMinus } from 'react-icons/fa'
const Accordian = () => {
    console.warn('warning')
    console.error('error joke')
    console.log('%chello world', 'font-size:50px')
    console.table([{ web: 'nice app', pass: 'secur23456' }, { web: 'nice app', pass: 'secur23456' }, { web: 'nice app', pass: 'secur23456' }])
    const [newState, setNewState] = useState('');
    const [selected, setSelected] = useState(null);
    const [multistate, setMultistate] = useState(false);
    const [multiarray, setMultiarray] = useState([]);
    const [hover, setHover] = useState(false);
    const [chooseArray, setChooseArray] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('all');

    const handleSingleSelection = (id) => {
        setSelected(selected === id ? null : id)
    }
    const handleMultiSelection = (id) => {
        setSelected(null)
        let cpymultiarray = [...multiarray]
        multiarray.indexOf(id) === -1 ? cpymultiarray.push(id) : cpymultiarray.splice(multiarray.indexOf(id), 1)
        multiarray.indexOf(cpymultiarray)
        setMultiarray([...cpymultiarray])
    }
    useEffect(() => {
        let newData = data;
        newData = new Set(data.map(e => e.category))

        setChooseArray(['all', ...newData])
    }, [data]);
    return (
        <div className='wrapper'>
            <h1 className={`head`}> Q &amp; A</h1>

            <div style={{ display: 'flex' }}>
                {chooseArray?.map((category, index) => (<button
                    style={{
                        margin: '20px',
                        padding: "10px 15px",
                        borderRadius: "25px",
                        cursor: 'pointer',
                        backgroundColor: ` ${category === currentCategory ? ('green') : ('white')}`,
                        color: ` ${category === currentCategory ? ('white') : ('green')}`
                    }}
                    onClick={(e) => {
                        { console.log('current:', currentCategory) }
                        setCurrentCategory(category)
                    }} key={index} >{category} {data.filter(e => e.category === category).length > 0 ? data.filter(e => e.category === category).length : data.length}</button>))}
            </div>

            <button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                    margin: '20px',
                    padding: "10px 15px",
                    borderRadius: "25px",
                    cursor: 'pointer',
                    backgroundColor: ` ${multistate ? ('green') : ('white')}`,
                    color: ` ${multistate ? ('white') : ('green')}`
                }}
                onClick={() => {
                    setSelected(null)
                    setMultiarray([])
                    setMultistate(!multistate)
                }}>{`${hover ? `${multistate ? 'disable multi selection' : 'enable multi selection'}` : `${multistate ? 'disable  ' : 'enable  '}`}`}</button>
            {
                data && data.length > 0 &&
                data.map((el, index) => (el.category === currentCategory || currentCategory === 'all') && (

                    <div className='item' key={el.id}>
                        <div className={`title ${selected === el.id && !multistate ? 'colorGreen' : multistate && multiarray.indexOf(el.id) !== -1 ? 'colorGreen' : null}  `} onClick={() => multistate ? handleMultiSelection(el.id) : handleSingleSelection(el.id)}>
                            <h3>{index + 1} - {el.question} &nbsp;&nbsp;&nbsp;   </h3>
                            <span> {selected === el.id || multiarray.indexOf(el.id) !== -1 ? <>  {<FaMinus />}</> : <FaPlus />}</span>
                        </div>
                        {
                            multistate ?
                                multiarray.indexOf(el.id) !== -1 && (<Answer el={el.answer} />)
                                :
                                selected === el.id && (<Answer el={el.answer} />)}
                    </div>
                )


                )
            }

        </div>

    )
}

export default Accordian