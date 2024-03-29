import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../App.css';

export default function AboutMe() {
    return (
        <Row id='AboutMe'>
            <Col className='d-flex flex-column justify-content-center'>
                <Row className='mb-5'>
                    <Col>
                        <p className='display-6 text-light text-center'>About Me</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <p className='fs-sm-5 text-light w-75' style={{ textAlign: 'justify' }}>
                            Hi there! I'm a full stack web developer and tech enthusiast with a passion for creating innovative solutions. I have expertise in using various technologies to build web applications, including React.js, Express.js, and MongoDB. I've worked on multiple projects and have learned a lot through these experiences. I have also achieved victory at the institute level in a hackathon competition. My goal is to continue learning and growing in the field of technology and to use my skills to make a positive impact on the world.
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
