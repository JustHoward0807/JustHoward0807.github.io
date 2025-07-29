import React, { useEffect, useState } from "react";
import Typed from 'typed.js';

function Home() {
    const el = React.useRef(null);
    const [greetingColor, setGreetingColor] = useState<string>("");



    useEffect(() => {
        // TODO: Provide more language
        let greetingLanguage: string[] = ["Hello", "你好", "안녕하세요", "Hallo", "Xin chào", "Hola", "Hej", "Halló", "Dia dhuit", "Salve", "Kamusta", "Bonjour", "Aloha", "Γειά σου", "привет", "Buna ziua"];
        const typed = new Typed(el.current, {
            strings: greetingLanguage,
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
            backDelay: 1000,
            cursorChar: '🌎',
            autoInsertCss: false,
            shuffle: true
        });

        const intervalId: NodeJS.Timeout = setInterval(() => {
            // Generate by chatGPT so it only provide light color range
            let randomColor = () => `#${Math.floor(Math.random() * 0xAAAAAA + 0x555555).toString(16)}`;
            setGreetingColor(randomColor);

            // TODO: Change the interval time
        }, 5000);


        return () => {
            clearInterval(intervalId);
            typed.destroy();
        }
    }, []);

    return (
        <>
            <section id="firstPageBox">
                <div id="leftBox">
                    <div 
                        className="profile_pic" 
                        style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/images/me.jpg)`,
                            backgroundRepeat: 'no-repeat'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundImage = `url(${process.env.PUBLIC_URL}/images/profile.JPG)`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundImage = `url(${process.env.PUBLIC_URL}/images/me.jpg)`;
                        }}
                    ></div>
                    <button className="resume fw-bold" onClick={() => window.open("/Lung_Hao_Tung_2025_Resume.pdf", "_blank")} >Resume</button>
                </div>


                <div id="rightBox">
                    {/* <!-- For the title hello world --> */}
                    <h1 id="hello_world"><span id="hello" className="fw-bold" style={{ color: greetingColor }} ref={el}></span> World!</h1>

                    {/* <!-- The introduction --> */}
                    <p id="self-introduction">
                        I’m Howard Tung. A software developer from Taiwan. I like to design
                        and making creative, innovative, and unique projects. Feel free to
                        contact me if you have any questions.
                    </p>
                    {/* <!-- Icon to social media (LinkedIn, Github, Mail) --> */}
                    {/* <!--      Distributed evenly      --> */}
                    <div id="socialAPP">
                        <a href="https://www.linkedin.com/in/justhoward0807/" rel="noreferrer" target="_blank" aria-label="Visit Howard's LinkedIn profile">
                            <img
                                className="social"
                                src="images/linkedin-icon-2.svg"
                                alt="LinkedIn"
                                height="35px"
                                width="35px"
                            />
                        </a>
                        {/* <!-- Jump to email me section --> */}
                        <a href="mailto:howardongdev0807@gmail.com" rel="noreferrer" target="_blank" aria-label="Send email to Howard">
                            <img
                                className="social"
                                src="images/gmail.ico"
                                alt="Email"
                                width="35px"
                                height="35px"
                            />
                        </a>
                        <a href="https://github.com/JustHoward0807" rel="noreferrer" target="_blank" aria-label="Visit Howard's GitHub profile">
                            <img
                                className="social"
                                src="images/github-mark-white.svg"
                                alt="Github"
                                width="35px"
                                height="35px"
                            />
                        </a>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Home;
