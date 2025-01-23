import React from 'react';
import { ListGroup, Image, Stack, Badge, Carousel, Card } from 'react-bootstrap';
import { projects } from './Models/Project.tsx';
import Works from './Works.tsx';

function Projects() {
    return (
        <>
            <section className="d-flex flex-column align-items-center justify-content-center" style={{ "height": "fit-content" }}>

                {/* <div className='topTechStackBox mt-4 mb-4 text-center' style={{ "width": "30vw" }}>
                    FEATURED PROJECTS */}
                {/* <span className='fs-3'>TECH STACK</span> */}
                <span className=' mt-5 mb-4 text-center sectionTitle'>
                    TECH STACK
                </span>
                {/* </div> */}
                <div id="bottomTechStackBox" className='ms-3 me-3 ' style={{}}>
                    <ListGroup className="d-flex flex-row flex-wrap justify-content-evenly">
                        <ListGroup.Item title="Java" className="flex-grow-0"><img src="images/icons8-java.svg" width="40px" height="40px" alt="Java Icon" /></ListGroup.Item>
                        <ListGroup.Item title="HTML" className="flex-grow-0"><img src="images/html-1.svg" width="40px" height="40px" alt="HTML Icon" /></ListGroup.Item>
                        <ListGroup.Item title="CSS" className="flex-grow-0"><img src="images/css-3.svg" width="40px" height="40px" alt="CSS Icon" /></ListGroup.Item>
                        <ListGroup.Item title="Javascript" className="flex-grow-0"><img src="images/javascript-1.svg" width="40px" height="40px" alt="Javascript Icon" /></ListGroup.Item>
                        <ListGroup.Item title="Flutter" className="flex-grow-0"><img src="images/flutter-logo.svg" width="40px" height="40px" alt="Flutter Icon" /></ListGroup.Item>
                        <ListGroup.Item title="Dart" className="flex-grow-0"><img src="images/dart.svg" width="40px" height="40px" alt="Dart Icon" /></ListGroup.Item>
                        <ListGroup.Item title="MySQL" className="flex-grow-0"><img src="images/mysql-6.svg" width="40px" height="40px" alt="MySQL Icon" /></ListGroup.Item>
                        <ListGroup.Item title="SQLite" className="flex-grow-0"><img src="images/sqlite.svg" width="40px" height="40px" alt="SQLite Icon" /></ListGroup.Item>
                        <ListGroup.Item title="C++" className="flex-grow-0"><img src="images/c.svg" width="40px" height="40px" alt="C++ Icon" /></ListGroup.Item>
                    </ListGroup>
                </div>


            </section>

            <section className="d-flex flex-column align-items-center justify-content-center" style={{ "height": "fit-content" }}>
                {/* <div className='topTechStackBox mt-5 mb-4 text-center' style={{ "width": "30vw" }}> */}

                <span className=' mt-5 mb-5 text-center sectionTitle'>
                    FEATURED PROJECTS
                </span>
                {/* </div> */}

                <div id="bottomProjectsBox">
                    {populateProjects()}
                </div>

            </section>


            <section className="d-flex flex-column mx-auto align-items-center justify-content-center" style={{ width: "70vw" }}>

                <span className=' mt-5 mb-5 sectionTitle' style={{ width: "fit-content" }}>
                    WORK EXPERIENCES
                </span>

                <Works />
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


                        <div key={index} className={`d-flex justify-content-between projects ${index % 2 !== 0 ? 'flex-row-reverse' : ''} vw-100 ps-4 pe-4 mb-4`} >

                            <Carousel key={index} className="imageBox rounded mt-3" slide={false} fade interval={null} style={{ width: "47vw", height: "40vh" }}>
                                {project.carouselImagePath.map((image, index) => (

                                    <Carousel.Item key={index} style={{ width: "47vw", height: "40vh" }}>
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

                            <div className="mt-3 d-flex flex-column align-items-center justify-content-evenly projectTime">
                                <span className="rounded-circle projectTime" style={{ "width": "10px", "height": "10px", "backgroundColor": "#F8F9FA" }}></span>
                                <div className='line projectTime' ></div>
                                <div className="number projectTime">{project.year.getFullYear()}</div>
                                <div className='line projectTime'></div>
                                <span className="rounded-circle projectTime" style={{ "width": "10px", "height": "10px", "backgroundColor": "#F8F9FA" }}></span>

                            </div>



                            <div className={`rounded mt-3 d-flex flex-column justify-content-around p-1 featuredDescription`} style={{ "width": "47vw", "height": "40vh" }}>
                                <h3>{project.title}</h3>
                                <p className='h-auto flex-grow-1 featuredDescription' dangerouslySetInnerHTML={{ __html: project.description }}></p>
                                <Stack direction='horizontal' gap={2}>
                                    {project.tags.map((tag, index) => (
                                        <Badge key={index} bg="info">
                                            {tag}
                                        </Badge>
                                    ))}

                                </Stack>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className='mt-1 pe-1 align-self-end github' style={{ textDecoration: 'none' }}>
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


            {/* <div className='topTechStackBox mt-5 text-center d-flex flex-column align-items-center justify-content-center mb-5' style={{ "width": "30vw", "margin": "auto" }}>
                <span className='fs-3'>ARCHIVE PROJECTS</span> */}
            <section className="d-flex flex-column mx-auto align-items-center justify-content-center">
                <span className='mt-5 mb-4 text-center sectionTitle'>
                    ARCHIVE PROJECTS
                </span>
                {/* </div> */}


                <div className='container mb-5' style={{ width: "80vw", margin: "auto", }}>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2'>
                        {projects
                            .filter(project => !project.isFeatured)
                            .sort((a, b) => b.year.getTime() - a.year.getTime())
                            .map((project, index) => (
                                <div key={index} className='col'>
                                    {/* <a href={project.githubLink} target='_blank' rel="noreferrer" style={{ textDecoration: "none" }}> */}
                                    <Card style={{ backgroundColor: "#232b2b", color: "white", height: "20em" }} onClick={() => window.open(project.githubLink)}>
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
                                            <Card.Text className='description' dangerouslySetInnerHTML={{ __html: project.description }} style={{ opacity: "90%" }} />
                                        </Card.Body>
                                        <footer className="blockquote-footer mt-1">
                                            {project.tags.join(", ")}
                                        </footer>
                                        <Card.Footer className="text-light">{project.year.toLocaleString('en-US', { year: 'numeric', month: 'long' })}</Card.Footer>
                                    </Card>
                                    {/* </a> */}
                                </div>
                            ))}
                    </div>
                </div>

            </section>




        </>
    );
}



export default Projects;