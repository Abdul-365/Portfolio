import React from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import projects from './projects.json'

export default function () {
    return (
        <Container id='Projects' className='d-flex flex-column justify-content-center'>
            <Row className='mb-4'>
                <Col>
                    <p className='display-6 text-light text-center'>My Projects</p>
                </Col>
            </Row>
            <Row>
                <Carousel className='d-flex justify-content-center' interval={null}>
                    {projects.map((slide) => (
                        <Carousel.Item>
                            <div className='d-flex justify-content-around'>
                                {slide.map((project) => (
                                    <Card>
                                        <a className='h-100' href='https://github.com/Abdul-365/Samsung-Clone'>
                                            <div className='image-wrapper position-relative'>
                                                <Card.Img variant="top" src={project.image} />
                                            </div>
                                            <Card.Body className='d-flex flex-column p-4'>
                                                <Card.Title className='mb-4 fs-3'>{project.title}</Card.Title>
                                                <Card.Text className='d-flex flex-column mb-auto'>
                                                    {project.description}
                                                </Card.Text>
                                                <div className='tech-used d-flex justify-content-between'>
                                                    {project.techStack.map((tech) => (
                                                        <div className='d-flex align-items-center'>
                                                            <img className='tech-logo' src={tech.logo} />
                                                            <p className='m-0 d-inline'>{tech.name}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Card.Body>
                                        </a>
                                    </Card>
                                ))}
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Row>
        </Container>
    )
}