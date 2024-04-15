import React, { useEffect, useState } from 'react'

const ScrollIndicators = ({ url }) => {
    const [data, setData] = useState({});
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [precentage, setPrecentage] = useState(0);
    const fetchData = async (url) => {
        try {
            setLoading(true)
            const res = await fetch(url)
            const datajson = await res.json()
            if (datajson && datajson.posts && datajson.posts.length > 0) {
                setData(datajson)
                setPosts(datajson.posts)
                setLoading(false)
            }

        } catch (error) {
            setLoading(false)
            console.log(error.message)
            setErrorMessage(error.message)
        }

    }
    const handleScrollPrecent = () => {
        console.log(
            "body scroll  parentNode : " + document.body.parentNode.scrollTop

        )
        console.log(
            "body scroll top : " + document.body.scrollTop,
        )
        console.log(
            "documentElement scroll top : " + document.documentElement.scrollTop,
        )
        console.log(
            "documentElement scrollHeight: " + document.documentElement.scrollHeight,
        )
        console.log(
            "documentElement clientHeight : " + document.documentElement.clientHeight,
        )

        const heightScrolled = (document.documentElement || document.body.parentNode || document.body).scrollTop;
        const heigtLeft = document.documentElement.scrollHeight - document.documentElement.clientHeight

        setPrecentage(Math.ceil((heightScrolled / heigtLeft) * 100))

    }

    useEffect(() => {
        fetchData(url)
    }, [url]);

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPrecent)
        return window.removeEventListener('scroll', () => { })
    }, []);


    if (loading) return (<div>loading...</div>)
    return (
        <>
            <div style={{ width: "100%", position: 'relative', height: "120px", alighItmes: 'center', justifyContent: "center", display: "flex" }} >
                <div style={{ position: 'fixed', width: "95%", height: "120px", backgroundColor: 'white' }}>
                    <h1 style={{ margin: "20px auto" }}> Data of Posts Title </h1>
                    <div style={{ width: "100%", height: '10px', backgroundColor: 'yellow' }}>
                        <div style={{ width: `${precentage}%`, height: '10px', backgroundColor: 'red', transition: "all .9s ease" }}></div>
                    </div>
                </div>
            </div>
            {errorMessage ? (<div>{errorMessage}</div>) :
                <div>
                    {posts && posts.length > 0 && posts.map(el => (
                        <div> {el?.title}</div>
                    ))}
                </div>}
        </>
    )

}


export default ScrollIndicators