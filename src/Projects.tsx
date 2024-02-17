import React from 'react';
import { ListGroup, Image, Stack, Badge, Carousel, Card } from 'react-bootstrap';
import { projects } from './Models/Project.tsx';
import Works from './Works.tsx';

function Projects() {
    return (
        <>
            <section className="d-flex flex-column align-items-center justify-content-center" style={{ "height": "fit-content" }}>

                <div className='topTechStackBox mt-4 mb-4 text-center' style={{ "width": "30vw" }}>
                    <span className='fs-3'>TECH STACK</span>
                </div>


                <div id="bottomTechStackBox" className='mt-3'>
                    <ListGroup horizontal >
                        <ListGroup.Item title="Java"><img src="images/icons8-java.svg" width="40px" height="40px"
                            alt="Java Icon" /></ListGroup.Item>
                        <ListGroup.Item title="HTML"><img src="images/html-1.svg" width="40px" height="40px"
                            alt="HTML Icon" /></ListGroup.Item>
                        <ListGroup.Item title="CSS"><img src="images/css-3.svg" width="40px" height="40px"
                            alt="CSS Icon" /></ListGroup.Item>
                        <ListGroup.Item title="Javascript"><img src="images/javascript-1.svg" width="40px"
                            height="40px" alt="Javascript Icon" /></ListGroup.Item>

                        <ListGroup.Item title="Flutter"><img src="images/flutter-logo.svg" width="40px"
                            height="40px" alt="Flutter Icon" /></ListGroup.Item>

                        <ListGroup.Item title="Dart"><img src="images/dart.svg" width="40px" height="40px"
                            alt="Dart Icon" /></ListGroup.Item>

                        <ListGroup.Item title="MySQL"><img src="images/mysql-6.svg" width="40px" height="40px"
                            alt="MySQL Icon" /></ListGroup.Item>
                        <ListGroup.Item title="SQLite"><img src="images/sqlite.svg" width="40px" height="40px"
                            alt="SQLite Icon" /></ListGroup.Item>
                        <ListGroup.Item title="C++"><img src="images/c.svg" width="40px" height="40px"
                            alt="C++ Icon" /></ListGroup.Item>
                    </ListGroup>
                </div>

            </section>

            <section className="d-flex flex-column align-items-center justify-content-center" style={{ "height": "fit-content" }}>
                <div className='topTechStackBox mt-5 mb-4 text-center' style={{ "width": "30vw" }}>
                    <span className='fs-3'>FEATURED PROJECTS</span>
                </div>

                <div id="bottomProjectsBox">
                    {populateProjects()}
                </div>

            </section>

        </>

    );
}

function populateProjects() {

    return (
        <>
            {
                projects.filter(project => project.isFeatured)
                    .sort((a, b) => b.year.getTime() - a.year.getTime())
                    .map((project, index) => (


                        <div className={`d-flex justify-content-between ${index % 2 !== 0 ? 'flex-row-reverse' : ''} vw-100 ps-4 pe-4`} >

                            <Carousel className="imageBox rounded mt-3" style={{ "width": "47vw", "height": "40vh" }} slide={false} fade interval={null}>
                                {project.carouselImagePath.map((image, index) => (

                                    <Carousel.Item style={{ "width": "47vw", "height": "40vh" }}>
                                        <div className="imageBackdrop" style={{ backgroundImage: `url(${image})` }}></div>
                                        <Image
                                            key={index}
                                            src={image}
                                            fluid
                                            style={{ position: "relative", zIndex: "1", width: '100%', height: '100%', objectFit: 'contain' }}
                                        />
                                    </Carousel.Item>
                                ))}

                            </Carousel>

                            <div className="mt-3 d-flex flex-column align-items-center justify-content-evenly " style={{ "width": "6vw", "height": "40vh", "textAlign": "center" }}>
                                <span className="rounded-circle" style={{ "width": "10px", "height": "10px", "backgroundColor": "#F8F9FA" }}></span>
                                <div className='line'></div>
                                <div className="number">{project.year.getFullYear()}</div>
                                <div className='line'></div>
                                <span className="rounded-circle" style={{ "width": "10px", "height": "10px", "backgroundColor": "#F8F9FA" }}></span>

                            </div>



                            <div className={`rounded mt-3 d-flex flex-column justify-content-around p-4`} style={{ "width": "47vw", "height": "40vh" }}>
                                <h3>{project.title}</h3>
                                <p className='h-auto flex-grow-1 description' dangerouslySetInnerHTML={{ __html: project.description }}></p>
                                <Stack direction="horizontal" gap={2}>
                                    {project.tags.map((tag, index) => (
                                        <Badge key={index} bg="info">
                                            {tag}
                                        </Badge>
                                    ))}

                                </Stack>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className='  align-self-end github' style={{ textDecoration: 'none' }}>
                                    <Image
                                        src="images/github-mark-white.svg"
                                        alt="Github"
                                        width={"25px"}
                                        className='github'

                                    />
                                </a>
                            </div>
                        </div>

                    ))}


            <div className='topTechStackBox mt-5 text-center d-flex flex-column align-items-center justify-content-center mb-5' style={{ "width": "30vw", "margin": "auto" }}>
                <span className='fs-3'>ARCHIVE PROJECTS</span>
            </div>


            <div className='container mb-5' style={{ width: "80vw", margin: "auto", }}>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2'>
                    {projects
                        .filter(project => !project.isFeatured)
                        .sort((a, b) => b.year.getTime() - a.year.getTime())
                        .map((project, index) => (
                            <div key={index} className='col'>
                                <Card style={{ backgroundColor: "#232b2b", color: "white", height: "20em" }} >
                                    <Card.Body className='overflow-auto'>
                                        <Card.Title>{project.title}</Card.Title>
                                        <Card.Link href={project.githubLink} target='_blank'>

                                            <Image
                                                src="images/github-mark-white.svg"
                                                alt="Github"
                                                width={"25px"}
                                                className='github mt-2 mb-2'
                                                style={{ opacity: "70%" }}
                                            />
                                        </Card.Link>
                                        <Card.Text dangerouslySetInnerHTML={{ __html: project.description }} style={{ opacity: "90%" }} />
                                    </Card.Body>
                                    <footer className="blockquote-footer mt-1">
                                        {project.tags.join(", ")}
                                    </footer>
                                    <Card.Footer className="text-light">{project.year.toLocaleString('en-US', { year: 'numeric', month: 'long' })}</Card.Footer>
                                </Card>
                            </div>
                        ))}
                </div>
            </div>


            <Works />



        </>
    );
}



export default Projects;