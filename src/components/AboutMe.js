import React from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function () {
    return (
        <Container id='AboutMe' className='d-flex flex-column justify-content-center'>
            <Row className='mb-4'>
                <Col>
                    <p className='display-6 text-light text-center'>About Me</p>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <p className='fs-5 text-light text-center w-75'>
                        Hi there! I'm a full stack web developer and tech enthusiast with a passion for creating innovative solutions. I have expertise in using various technologies to build websites, including React.js, Express.js, and MongoDB. I've worked on projects such as shopping and agriculture websites and have learned a lot through these experiences. My goal is to continue learning and growing in the field of technology and to use my skills to make a positive impact on the world.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}
