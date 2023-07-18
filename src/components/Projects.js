import React, { useRef, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../App.css';
import projects from './projects.json';

function ProjectCard({ project }) {
    return (
        <Card>
            <a className='d-flex flex-column h-100' href={project.link}>
                <Card.Img
                    style={{
                        objectFit: 'cover',
                    }}
                    variant="top"
                    src={project.image}
                />
                <Card.Body className='d-flex flex-column p-4 flex-grow-1'>
                    <Card.Title className='mb-4 fs-3'>{project.title}</Card.Title>
                    <Card.Text style={{ whiteSpace: 'pre-wrap' }} className='mb-auto'>
                        {project.description}
                    </Card.Text>
                    <div className='d-flex justify-content-between mt-4 flex-wrap gap-3'>
                        {project.techStack.map((tech) => (
                            <div className='d-flex align-items-center' key={tech.name}>
                                <img
                                    style={{ width: '2rem', marginRight: '0.5em' }}
                                    src={tech.logo}
                                    alt={tech.name}
                                />
                                <p className='m-0 d-inline'>{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </Card.Body>
            </a>
        </Card>
    )
}

export default function Projects() {

    const slides = projects.reduce((acc, project, index) => {
        if (index % 2 === 0) {
            acc.push([project]);
            return acc;
        }
        (acc[Math.trunc(index / 2)]).push(project);
        return acc;
    }, []);

    return (
        <Row id='Projects'>
            <Col className='d-flex flex-column justify-content-center'>
                <Row className='mb-4'>
                    <Col>
                        <p className='display-6 text-light text-center'>My Projects</p>
                    </Col>
                </Row>
                <Row>
                    <Carousel
                        className='d-none d-xl-flex justify-content-center'
                        interval={null}
                    >
                        {slides.map((slide, index) => (
                            <Carousel.Item key={index}>
                                <Container className='gap-1 h-100'>
                                    <Row className='h-100'>
                                        {slide.map(project => (
                                            <Col key={project.title} className='d-flex justify-content-center'>
                                                <ProjectCard project={project} />
                                            </Col>
                                        ))}
                                    </Row>
                                </Container>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <Carousel className='d-block d-xl-none' interval={null}>
                        {projects.map(project => (
                            <Carousel.Item key={project.title} className='px-2'>
                                <div className='d-flex justify-content-center'>
                                    <ProjectCard project={project} />
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Row>
            </Col>
        </Row>
    )
}