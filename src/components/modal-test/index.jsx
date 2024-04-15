import { useState } from "react"
import Model from "./model";
import './style.css'
export default function ModalTest() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div >
            {!showModal && <button className="modal_button" onClick={() => setShowModal(true)}> Model</button>}
            {showModal && (<Model
                id={'modeltest'}
                setShowModal={setShowModal}
                header="Model test header"
                body="model test body for advanced ReactJs"
                footer="created by Eslam Mohamed"

            />)}

        </div>

    )
}