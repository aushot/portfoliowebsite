import "./App.css"
import React, {useEffect, useRef, useState} from "react";



function Title() {
    return (
        <div className="Title">
            <p>Software Engineer</p>
            <h1>Marco Maraglino</h1>
            <p className="planding">Craft exceptional digital experiences that stand out in the digital landscape</p>
            <div>
                    <a href="mailto:marcomaraglino5@gmail.com"><button className="primary">Hire Me</button></a>
                    <a href="#about" className="aboutme">About me</a>
            </div>

        </div>
    )
}

function Experiences() {
    return (
        <div className="experiences">
            <h1>Experiences</h1>
        <div className="grid-container">
            <div className="duration1"><p>2022 - present</p></div>
            <div className="secondtitle1"><p>Bachelor degree - Politecnico of Bari</p></div>
            <div className="paragraph1">
                <p>
                    Gained a solid understanding of core computer science principles, including programming, data structures, and algorithms.
                    Throughout my academic journey, I honed problem-solving abilities, critical thinking, and teamwork, essential competencies for a successful career in the field of computer engineering.
                </p>
                </div>
        </div>
            <div className="grid-container">
                <div className="duration1"><p>2017 -2022</p></div>
                <div className="secondtitle1"><p>High School Diploma - Technical Institute, Computer Science</p></div>
                <div className="paragraph1">
                    <p>
                        Analysis, design, and implementation of complex databases. Development of dynamic web portals and websites. Creation of basic applications and software with user interfaces.
                        Describing and comparing the operation of electronic and telecommunication devices and tools.
                        Configuring, installing, and managing data processing systems and networks.
                        Developing computer applications for local networks or remote services.
                        Further specialization in the analysis, comparison, and design of computer devices and tools, as well as the development of computer applications.
                    </p>
                </div>
            </div>
            </div>
    );
}

function App() {
    const [mouseCoordinates, setMouseCoordinates] = useState({x:0, y:0});
    const heroRef = useRef(null)

    useEffect(() => {
            const updateMousePosition = (ev: MouseEvent) => {
                const {pageX, pageY} = ev;

                setMouseCoordinates( {
                    x: ev.pageX,
                    y: ev.pageY
                })

                document.documentElement.style.setProperty('--x', pageX + "px");
                document.documentElement.style.setProperty('--y', pageY + "px");


            }

            window.addEventListener("mousemove", updateMousePosition);

            return () => {
                window.removeEventListener("mousemove", updateMousePosition)
            }
    }, []);

    function About() {
        return(
            <div className="about" id="about">
            <h1>About</h1>
            <p>I'm a dedicated programmer driven by a relentless curiosity for learning, a passion for problem-solving, and an insatiable thirst for new experiences. With a deep love for coding and a penchant for exploration, I'm constantly pushing the boundaries of what's possible in the world of technology. Join me on my journey as I embrace challenges, seek innovation, and uncover exciting new horizons</p>
        </div>)
    }




    return (
        <>
            <div className="wrapper">
                <div ref={heroRef} id="App" className="App">
                    <Title></Title>
                    <div className="socialnetwork-mobile">
                        <a href="https://www.instagram.com/marcomaraglino" target="_blank" className="instagram" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/marcomaraglino5/" target="_blank" className="linkedin" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                        <a href="https://github.com/aushot" target="_blank" className="github" rel="noreferrer"><i className="fa fa-github"></i></a>
                    </div>
                    <About></About>
                    <Experiences></Experiences>
                </div>
            </div>
        </>
            )
}

export default App;
