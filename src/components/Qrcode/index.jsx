import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const Qrcode = () => {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');
    const handleGenerate = () => {
        setQrCode(input)
    }
    return (
        <div>
            <h1>
                QR code Generator
            </h1>
            <div>
                <input
                    onChange={(e) => setInput(e.target.value)} type='text' placeholder='enter value' name='Qrcode' />
                <button
                    style={{
                        width: '200px', padding: '5px', fontSize: '12px', margin: '10px'
                    }}
                    disabled={!input || input.trim() == ''}
                    onClick={() => handleGenerate()}>Generate</button>
            </div>
            <div>
                <QRCode
                    id='qr-code-value'
                    value={qrCode}
                    size={200}

                />
            </div>
        </div>
    )
}

export default Qrcode