import React from 'react'
import './style.css'

const Model = ({ id,

    setShowModal,
    header,
    body,
    footer }) => {
    return (

        <div id={id || 'Modal'} className="modal">
            <div>
                <div>
                    <span onClick={() => setShowModal(false)}>&times;</span>
                    <h2> {header ? header : 'my Modal popup'} </h2>
                </div>
                <div className="modal_content">{body ? body : 'body'}</div>
                <div className="modal_footer">{footer ? footer : 'footer'}</div>
            </div>

        </div>


    )
}

export default Model