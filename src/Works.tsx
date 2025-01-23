import React from 'react';
import { Col, ListGroup, Nav, Row, Tab, Tabs } from 'react-bootstrap';


function Works() {
    return (
        <>
            {/* <div > */}
            {/* Small screens: Justified Tabs */}
            <div className="mb-3 d-md-none">
                <Tabs
                    defaultActiveKey="first"
                    id="fill-tab-example"
                    className="mb-3 tab"
                    fill
                >
                    <Tab eventKey="first" title="J. Willard Marriott Library">
                        <span className='fs-5 fw-bold'>Web Developer & User Experience Assistant</span><span> @ <a href='https://lib.utah.edu/' target='_blank' rel='noreferrer' >J. Willard Marriott Library</a></span>
                        <p className='mt-1'>June 2023 - Present</p>

                        <ListGroup as="ul" numbered>
                            <ListGroup.Item as="li" className='workGroup'>Proficiently resolve website-related issues reported by library employees using Jira project management software. This includes adding elements and editing pages, utilizing WordPress and Omni CMS.</ListGroup.Item>
                            <ListGroup.Item as="li" className='workGroup'>Implement custom PHP functions to enhance website functionality, resulting in improved user interactions and efficiency.</ListGroup.Item>
                            <ListGroup.Item as="li" className='workGroup'>Conducted thorough quality checks on all library website pages, ensuring they met design standards and were free from style issues, typos, and other errors.</ListGroup.Item>
                        </ListGroup>
                    </Tab>
                    <Tab eventKey="second" title="CodingAPE School">
                        <span className='fs-5 fw-bold'>Lecturer</span><span> @ <a href='https://codingapeschool.com/' target='_blank' rel='noreferrer'>CodingAPE School</a></span>
                        <p className='mt-1'>July 2020 - June 2021</p>
                        <ListGroup as="ul" numbered>
                            <ListGroup.Item as="li" className='workGroup'>Utilized visual programming language to teach students about programming.</ListGroup.Item>
                            <ListGroup.Item as="li" className='workGroup'>Taught students to use the AI automatic translating function of mBlock 5; taught students to enter color recognition program to Codey Rocky, a coding robot.</ListGroup.Item>

                        </ListGroup>
                    </Tab>
                </Tabs>
            </div>

            {/* Medium and larger screens: Stacked Tabs */}
            <div className="mb-3 d-none d-md-block">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                    <Row >
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item >
                                    <Nav.Link eventKey="first" className='text-light'>J. Willard Marriott Library</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" className='text-light'>CodingAPE School</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <span className='fs-5 fw-bold'>Web Developer & User Experience Assistant</span><span> @ <a href='https://lib.utah.edu/' target='_blank' rel='noreferrer'>J. Willard Marriott Library</a></span>
                                    <p className='mt-1'>June 2023 - Present</p>

                                    <ListGroup as="ul" numbered>
                                        <ListGroup.Item as="li" className='workGroup'>Proficiently resolve website-related issues reported by library employees using Jira project management software. This includes adding elements and editing pages, utilizing WordPress and Omni CMS.</ListGroup.Item>
                                        <ListGroup.Item as="li" className='workGroup'>Implement custom PHP functions to enhance website functionality, resulting in improved user interactions and efficiency.</ListGroup.Item>
                                        <ListGroup.Item as="li" className='workGroup'>Conducted thorough quality checks on all library website pages, ensuring they met design standards and were free from style issues, typos, and other errors.</ListGroup.Item>
                                    </ListGroup>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <span className='fs-5 fw-bold'>Lecturer</span><span> @ <a href='https://codingapeschool.com/' target='_blank' rel='noreferrer'>CodingAPE School</a></span>
                                    <p className='mt-1'>July 2020 - June 2021</p>
                                    <ListGroup as="ul" numbered>
                                        <ListGroup.Item as="li" className='workGroup'>Utilized visual programming language to teach students about programming.</ListGroup.Item>
                                        <ListGroup.Item as="li" className='workGroup'>Taught students to use the AI automatic translating function of mBlock 5; taught students to enter color recognition program to Codey Rocky, a coding robot.</ListGroup.Item>

                                    </ListGroup>

                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
            {/* </div> */}
        </>
    );
}



export default Works;