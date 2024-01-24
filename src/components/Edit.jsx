import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import noimg from '../assets/noimage.png' 

function Edit() {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
      <button onClick={handleShow} style={{textDecoration:'none'}} className='btn btn-link text-success d-flex align-items-center fw-bolder'><i className="fa-solid fa-edit fa-2x"></i></button>
      <Modal size='lg'
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Project Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="row">
              <div className="col-lg-4">
                  <label className='w-100 d-flex align-items-center flex-column'>
                      <input type="file" style={{display:'none'}} />
                      <img src={noimg} alt="project upload pic" className='mt-5'/>
                  </label>
                  </div>
                  <div className="col-lg-8">
                      <div className="mb-3">
                          <input className='border rounded p-2 w-100' type="text" placeholder='Project Title' />
                  </div>
                  <div className="mb-3">
                          <input className='border rounded p-2 w-100' type="text" placeholder='Language Used' />
                  </div>
                  <div className="mb-3">
                          <input className='border rounded p-2 w-100' type="text" placeholder='Project GitHub Link' />
                  </div>
                  <div className="mb-3">
                          <input className='border rounded p-2 w-100' type="text" placeholder='Project Website Link' />
                  </div>
                  <div className="mb-3">
                          <input className='border rounded p-2 w-100' type="text" placeholder='Project OverView' />
                  </div>
              </div></div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="success">Update</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default Edit