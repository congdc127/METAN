import React, { useState, useRef, useEffect } from 'react';
import { Col, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalDialog from 'react-bootstrap/ModalDialog';

export default function Video() {
    const [show, setShow] = useState(false);

    return (
        <div className="block block-video" id="">
            <Button variant="primary" onClick={() => setShow(true)}>
                <img src="/img/play.png" />
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Body>
                    <video controls autoPlay>
                        <source src="/video/intro.mp4" type="video/mp4" />
                        <source src="/video/intro.ogg" type="video/ogg" />
                    </video>
                </Modal.Body>
            </Modal>
        </div>
    );
}
