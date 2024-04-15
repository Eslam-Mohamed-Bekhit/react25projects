import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import "./styles.css"

const SliderImages = ({ url = "https://picsum.photos/v2/list", page = 1, limit = 10 }) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);


    const [currentSlide, setCurrentSlide] = useState(0); // to determined the current image by their index

    useEffect(() => { if (url !== "") getData() }, [url]); //get images

    const handlePrev = () => { setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1) }
    const handleNext = () => { setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1) }


    const getData = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${url}?page=${page}&limit=${limit}`)
            const newdata = await res.json()
            setData(newdata)
            setLoading(false);
        } catch (error) {
            setErrorMsg(error.message)
        }
    }


    return (
        <div className='conatiner'>
            <BsArrowLeftCircleFill onClick={() => { handlePrev() }} className='arrow arrow-left' />
            {data && data.length && data.map((image, index) => (
                <img
                    key={image.id}
                    alt={image.download_url}
                    src={image.download_url}
                    className={currentSlide === index ? "currentImage  " : "hide-current-image half-opacity"}
                />
            ))}
            <BsArrowRightCircleFill onClick={() => { handleNext() }} className='arrow arrow-right' />
            <span className='circle-indicators'>
                {data && data.length &&
                    data.map((_, index) => (
                        <button key={index}

                            onClick={() => setCurrentSlide(index)}
                            className={currentSlide === index ? "current-indicators full-opacity " : "current-indicators hide-current-indicators half-opacity"}></button>
                    ))
                }
            </span>

        </div>
    )
}

export default SliderImages