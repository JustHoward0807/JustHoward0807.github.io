import React from 'react';
import { Col, ListGroup, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import { workExperiences } from '../../models/WorkExperience.tsx';
import './Works.css';

function Works() {
    return (
        <>
            {/* Small screens: Justified Tabs */}
            <div className="mb-3 d-md-none">
                <Tabs
                    defaultActiveKey={workExperiences[0].id}
                    id="fill-tab-example"
                    className="mb-3 tab"
                    fill
                >
                    {workExperiences.map((experience) => (
                        <Tab key={experience.id} eventKey={experience.id} title={experience.company}>
                            <span className='fs-5 fw-bold'>{experience.title}</span>
                            <span> @ <a href={experience.companyUrl} target='_blank' rel='noreferrer'>{experience.company}</a></span>
                            <p className='mt-1'>{experience.period}</p>

                            <ListGroup as="ul" numbered>
                                {experience.description.map((item, index) => (
                                    <ListGroup.Item key={index} as="li" className='workGroup'>{item}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Tab>
                    ))}
                </Tabs>
            </div>

            {/* Medium and larger screens: Stacked Tabs */}
            <div className="mb-3 d-none d-md-block">
                <Tab.Container id="left-tabs-example" defaultActiveKey={workExperiences[0].id}>
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                {workExperiences.map((experience) => (
                                    <Nav.Item key={experience.id}>
                                        <Nav.Link eventKey={experience.id} className='text-light'>{experience.company}</Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                {workExperiences.map((experience) => (
                                    <Tab.Pane key={experience.id} eventKey={experience.id}>
                                        <span className='fs-5 fw-bold'>{experience.title}</span>
                                        <span> @ <a href={experience.companyUrl} target='_blank' rel='noreferrer'>{experience.company}</a></span>
                                        <p className='mt-1'>{experience.period}</p>

                                        <ListGroup as="ul" numbered>
                                            {experience.description.map((item, index) => (
                                                <ListGroup.Item key={index} as="li" className='workGroup'>{item}</ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </>
    );
}

export default Works;