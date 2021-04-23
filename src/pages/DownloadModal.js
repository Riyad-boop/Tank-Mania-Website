import React from 'react'
import { useState } from 'react';
import {Button, Modal} from 'react-bootstrap'

function DownloadModal() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (
        <div>
            <Button variant="outline-info" block onClick={handleShow}>
              DOWNLOAD NOW
            </Button>
                <Modal
                    size="lg"
                    show={show}
                    onHide={handleClose}
                    animation={true}
                    className="special_modal" //CSS styling
                >
                <Modal.Header closeButton>
                <Modal.Title style = {{color: "rgb(7, 169, 169)"}} >Goodbye?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to leave this page?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        I like it here 
                    </Button>
                    <a href="https://www.dropbox.com/sh/m8xx9xa59xayatv/AACiWs6aM37ZksXFnRtFYoAha?dl=0"><Button variant="primary" onClick={handleClose}>
                        Take me to the download page
                        </Button></a>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DownloadModal
