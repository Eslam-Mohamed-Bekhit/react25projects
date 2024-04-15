import React, { useState, useEffect } from 'react';
import useFetch from '../../Hooks/fetchHook';
import styles from './styles.css';

const GithubFinder = () => {
    const [inputValue, setInputValue] = useState('')
    /*  const [data, setData] = useState('')
     const [loading, setLoading] = useState(false)
     const [error, setError] = useState('') */
    const [value, setValue] = useState('eslam-mohamed-bekhit')

    const [data, loading, error] = useFetch(`https://api.github.com/users/${value}`)
    /*   const fetchData = async (url) => {
          try {
              setLoading(true);
              const response = await fetch(url);
              const dataJson = await response.json();
              setData(dataJson)
              setLoading(false);
              dataJson && dataJson.length && dataJson.length > 0 ? setData(dataJson) : setError('not data found');
          } catch (err) {
              setError(err.message);
              setLoading(false);
          }
  
      }
  
      useEffect(() => {
          fetchData(`https://api.github.com/users/${value}`)
  
      }, [value]); */






    if (loading) return (<div>loding...</div>)
    return (
        <>
            {console.log(data, loading, error)}
            <div>
                <div>
                    <input
                        name='search'
                        type='search'
                        id='search'
                        placeholder='search'
                        onChange={(e) => setInputValue(e.target.value)}

                    />
                    <button
                        onClick={() => setValue(inputValue)}>
                        search
                    </button>
                </div>


                {data &&
                    (
                        <div>
                            {data && data?.avatar_url
                                ? <img src={data?.avatar_url} />
                                : <p>image not provided</p>}
                            <div>
                                <a href={data.html_url}>Profile on Github</a>
                                <p> User joined on : </p>
                                <span>{data.created_at}</span>
                            </div>
                            <div>
                                <p>Public Repos : </p>
                                <span>{data.public_repos}</span>
                            </div>
                            <div>
                                <p>twitter_username : </p>
                                <span>{data.twitter_username}</span>
                            </div>
                            <div>
                                <p>work in</p>
                                <span>{data.company}</span>
                            </div>

                        </div>
                    )
                }
            </div>
        </>
    );

};

export default GithubFinder;