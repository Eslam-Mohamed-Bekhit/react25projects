import React, { useEffect, useState } from 'react'
import "./styles.css"

const LoadData = () => {
  const [skiped, setSkiped] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await fetch(`https://dummyjson.com/products?limit=25&skip=${count === 0 ? '0' : count * 25}`)
      const newdata = await res.json()
      console.log(newdata)
      if (newdata && newdata.products && newdata.products.length) {
        setSkiped(newdata.skip)
        setData(newdata.products)
        setLoading(false)

      }
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData()
  }, [count]
  )
  useEffect(() => {
    console.log(data)
    console.log(data?.length, skiped)
    console.log(count * 25)
    if (data.length && skiped === 75) {

      setButtonDisabled(true);
    }
  }, [data])
  if (loading) return (<div> loading... </div>)
  return (
    <div className='container'>

      <div className=' products-container'>
        {data && data.length ? data?.map((el) => (
          <div className='product'>
            <div>
              <img
                width={250}
                height={250}
                src={el.thumbnail}
                alt='product'

              />
            </div>
            <div>
              <p>price : {el.price}$</p>
              <h3> {el.title}</h3>
            </div>
          </div>
        )) : null}


      </div>
      <div className='button-container'>
        <button
          disabled={buttonDisabled}
          className='button-item' onClick={() => { setCount(count + 1) }}> load more products</button>
      </div>

    </div>
  )
}

export default LoadData