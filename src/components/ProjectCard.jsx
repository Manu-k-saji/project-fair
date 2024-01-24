import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';



function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card className='shadow mb-5 btn' style={{ width: '25rem' }} onClick={handleShow}>
                <Card.Img variant="top" src="https://codingartistweb.com/wp-content/uploads/2021/10/counter-01.png" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                </Card.Body>
            </Card>


            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className='align-items-center'>
                        <Col sm={12} md={6}>
                            <img className='img-fluid' src="https://codingartistweb.com/wp-content/uploads/2021/10/counter-01.png" alt="project image " />
                        </Col>
                        <Col sm={12} md={6}>
                            <h2 className="fw-bolder text-warning">Title</h2>
                            <p>Project Overview : <span className='fw-bolder'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium debitis officiis tempora adipisci ut modi dolore at repellendus corrupti sapiente. Optio porro possimus aliquam sequi reiciendis minima praesentium alias magnam!
                            </span></p>
                            <p>Language Used : <span className="fw-bolder text-danger">HTML, CSS, JS</span></p>
                        </Col>
                    </Row>
                    <div className="mt-1">
                        <a href="https://github.com/" target='_blank' ><i className="fa-brands fa-github fa-3x" style={{ color: 'black' }}></i> </a>
                        <a href="https://react-bootstrap.netlify.app/docs/components/modal/" target='_blank' className='ms-4' ><i className="fa-solid fa-link fa-3x" style={{ color: 'black' }}></i> </a>

                    </div>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default ProjectCard