import React, { useEffect, useState } from 'react'

const RandomColor = () => {
    const [color, setColor] = useState("#000000");
    const [typeColor, setTypeColor] = useState("hex");
    const [textToConver, setTextToConver] = useState('');
    const [rgbConverted, setRgbConverted] = useState(null);
    const [hexConverted, setHexConverted] = useState('');
    const converter = (c) => {
        let hexNumber = parseInt(c).toString(16);
        return hexNumber.length === 1 ? `0${hexNumber}` : hexNumber
    }

    const getRandom = (length) => { return Math.floor(Math.random() * length) }
    const convert = () => {
        if (typeColor === "hex" && color.trim().length === 7) {
            const hexArrey = [color.trim().slice(1, 3), color.trim().slice(3, 5), color.trim().slice(5)].map(el => parseInt(el, 16))
            return `rgb(${hexArrey.join()})`
        } else if (typeColor === "hex" && color.length === 4) {
            const hexArrey = [color.trim().slice(1, 2), color.trim().slice(2, 3), color.trim().slice(3)].map(el => parseInt(el, 16).toString() + parseInt(el, 16).toString())
            return `rgb(${hexArrey.join(',')})`
        } else if (typeColor === "rgb" && color.length > 8) {

            const rgbArray = color.trim().slice(4, -1).split(',')

            return `#${converter(rgbArray[0])}${converter(rgbArray[1])}${converter(rgbArray[2])}`
        }

    }
    const handleHexColor = () => {
        let hex = "#";
        const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        for (let i = 0; i < 6; i++) {
            hex += hexArray[getRandom(hexArray.length)]
        }
        setColor(hex)
    }
    const handleRGBColor = () => { setColor(`rgb(${getRandom(256)},${getRandom(256)},${getRandom(256)})`) }

    const handleRandomColor = () => { typeColor === "hex" ? handleHexColor() : handleRGBColor() }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        setColor(textToConver)
        let result = /^\s*#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})\s*$/i.exec(textToConver);
        let result2 = /^#?([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i.exec(textToConver);
        let result3 = /rgb\(\s*([0-9]+)\s*\,\s*([0-9]+)\s*\,\s*([0-9]+)\s*\)/i.exec(textToConver);
        if (result) {
            setRgbConverted({
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            });
            setTypeColor('hex')
            setHexConverted(null)

        } else if (result2) {
            setRgbConverted({
                r: parseInt(`${result2[1]}${result2[1]}`, 16),
                g: parseInt(`${result2[2]}${result2[2]}`, 16),
                b: parseInt(`${result2[3]}${result2[3]}`, 16)
            });
            setTypeColor('hex')

            setHexConverted(null)
        } else if (result3) {
            setHexConverted(
                `#${converter(result3[1])}${converter(result3[2])}${converter(result3[3])}`
            )
            setTypeColor('rgb')


            setRgbConverted(null)

        }
        console.log(textToConver, result3)
    }




    useEffect(() => {
        convert(color)

    }, [typeColor])


    return (
        <div style={{ height: "100vh", width: "100vw", backgroundColor: color }}>
            <button onClick={() => setTypeColor("hex")} >   Hex Color </button>
            <button onClick={() => setTypeColor("rgb")}>  RGB Color    </button>
            <button onClick={handleRandomColor}>   Random Color   </button>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', }}>
                <h3 style={{ backgroundColor: "white", padding: " 5px 10px" }}>
                    color by {typeColor} : {color}</h3>
                <h3 style={{ backgroundColor: "white", padding: " 5px 10px" }}>
                    {typeColor === 'hex' ? (`color by RGB : ${convert(color)}`) :
                        (`color by HEX : ${convert(color)}`)
                    }
                </h3>
            </div>
            <div>
                <p style={{ backgroundColor: 'white' }}>convertor</p>
                <form onSubmit={handleOnSubmit} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <input
                        style={{
                            margin: '10px ',
                            width: '300px',
                            padding: '10px',
                            outline: 'none'
                        }}
                        value={textToConver}
                        onChange={(e) => setTextToConver(e.target.value)}
                        placeholder='enter #000000 or rgb(255,255,255)' />
                    <input type={"submit"} />
                    {rgbConverted && <p> rgb color : {`rgb(${rgbConverted.r},${rgbConverted.g},${rgbConverted.b})`}</p>}
                    {hexConverted && <p>hex color :  {hexConverted}</p>}
                </form>
            </div>
        </div>
    )
}

export default RandomColor