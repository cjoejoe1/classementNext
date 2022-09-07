import React, { createContext, useState } from "react";
import { Modal } from "react-bootstrap";

export const ModalContext = createContext({});

const ModalBody = (props) => {

    const [ show, setShow ] = useState(false);
    const [ dialog, setDialog ] = useState(null);

    const handleClose = () => {
        setShow(false);
        setDialog(null)
    }
    const handleShow = (d) => {
        setDialog(d)
        setShow(true)
    }

    return (
    <ModalContext.Provider value={ { handleClose, handleShow } }>
        <Modal show={show} onHide={handleClose}>
            { dialog }
        </Modal>
        { props.children }
    </ModalContext.Provider>
    )
}

export default ModalBody