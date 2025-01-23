import React, { useEffect } from 'react';
import '../src/Contact.css';
import Typed from 'typed.js';
import Button from 'react-bootstrap/Button';

function Contact() {
    const el = React.useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Software Engineer", "Web Developer", "Full Stack Developer", "Backend Developer", "Frontend Developer", "Mobile App Developer", "UI/UX Developer", "Game Developer", "Database Developer"],
            typeSpeed: 30,
            backSpeed: 10,
            backDelay: 2000,
            cursorChar: ' __',
            shuffle: true,
            loop: true,
            smartBackspace: false,
        });
        return () => {
            typed.destroy();
        }
    }, []);


    return (
        <>
            <div className='contactSection d-flex flex-column'>
                <div className='flex-grow-1  d-flex flex-column align-items-center justify-content-center'>
                    <p className="fs-1 fw-bold mx-3 text-center" >Get in touch</p>
                    <p className='fs-5 mx-3 text-center' style={{ opacity: "60%" }}>Feel free to contact me or just come say Hi! </p>
                    <p className='fs-6 mx-3 text-center' style={{ opacity: "60%" }}>I'm open to positions such as:</p>
                    <div>
                        <span ref={el} className='fs-3' style={{ fontFamily: "Anonymous Pro" }} />
                    </div>

                    <Button className='contactBtn mt-4 fs-5' onClick={() => window.open('mailto:howardongdev0807@gmail.com')}>Say Hi</Button>
                </div>
                <p className='d-flex align-self-center justify-content-center mb-5'>
                    <a href="https://www.linkedin.com/in/justhoward0807/" target='_blank' rel='noreferrer' className='text-light  contactText'>Designed & Built by   Howard Tung, 2024</a>
                </p>
            </div>

        </>
    );
}

export default Contact;