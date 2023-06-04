import React from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function () {
    return (
        <Container id='Intro'>
            <Row className='h-100'>
                <Col className='d-flex flex-column justify-content-center'>
                    <p className='hi display-6 text-white'>Hi, I am</p>
                    <p className='text-purple display-1'>Abdul Mannan</p>
                    <p className='profession fs-5 text-white pt-3'>
                        I am a full stack web developer and I enjoy creating beautiful and functional websites.
                    </p>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <img className='illustration' src="./ill.svg"/>
                </Col>
            </Row>
        </Container>
    )
}
