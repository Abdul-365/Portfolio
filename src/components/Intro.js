import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../App.css';

export default function Intro() {
    return (
        <Row id='Intro'>
            <Col className='d-flex flex-column justify-content-center'>
                <Row>
                    <Col xs={12} md={6} className='d-flex justify-content-center p-4'>
                        <img src="./ill.svg" alt='illustration' width='90%' />
                    </Col>
                    <Col xs={12} md={6} className='d-flex flex-column justify-content-center p-4'>
                        <p className='display-6 text-white'>Hi, I am</p>
                        <p className='text-purple display-1'>Abdul Mannan</p>
                        <p className='fs-5 text-white pt-3'>
                            I am a full stack web developer and I enjoy creating beautiful and functional websites.
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
