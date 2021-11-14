import React from 'react';
import { Accordion } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className='about container mx-auto my-5' >

            <div className='row justify-content-center'>
                <div className="about-image  col-sm-12 col-md-10 col-lg-6">
                    <img src="https://images.unsplash.com/photo-1546560598-9c01e2ef8fde?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8NDA5NDUzfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                </div>
                <div className="about-accordian col-sm-12 col-md-10 col-lg-6">
                    <h3 className='text-center mt-md-5' >ZTM CAMERA</h3>
                    <p className='my-4'>Cameras may just be the most important accessory you can own. Not only because of ther ability of capturing photos, but also because they complete an occasion to the fullest. Whether you’re after a unique statement piece or a trendy retro design, there’s a choice for every budget.  </p>

                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header ><span className='fw-bold'>"I was there"</span></Accordion.Header>
                            <Accordion.Body>
                                Nowadays diners in restaurants might greet the arrival of their food with a few excited clicks of their phone to capture that sushi or pizza for posterity. Go back a couple of decades and the idea of showing a friend a picture of a dinner you'd been served earlier would raise eyebrows.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header><span className='fw-bold'> We're taking more snaps</span></Accordion.Header>
                            <Accordion.Body>
                                The main impact of digital is the sheer number of photographs being taken. If an uncle went to his niece's first birthday in 1985 he might have considered shooting off a single 24 exposure-roll of film a rather generous photographic record. Today, with a digital camera, he would think nothing of taking 100 or 200 photos.
                            </Accordion.Body>

                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><span className='fw-bold'>People are better photographers </span></Accordion.Header>
                            <Accordion.Body>
                                "Without being demeaning, it has given a huge amount of power to not very good photographers," says Margolis. There are grids to help compose the shot and photo editing software apps to improve the result.

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>

    );
};

export default About;