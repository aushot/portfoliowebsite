import "./App.css"
import React, {useEffect, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



function Title() {
    return (
        <div className="Title">
            <h1>Marco Get Maraglino</h1>
            <p>Software Engineer</p>
            <p className="planding">Craft exceptional digital experiences that stand out in the digital landscape</p>
            <div>
                <button className="primary">Hire Me</button>
                <a href="#" className="aboutme">About me</a>
            </div>

        </div>
    )
}

function Experiences() {
    return (
        <div className="experiences">
            <div className="title"><h1>Experiences</h1></div>
        <div className="grid-container">
            <div className="duration1"><p>2022 - present</p></div>
            <div className="secondtitle1"><p>Bachelor degree - Politecnico of Bari</p></div>
            <div className="paragraph1">
                <p>Gained proficiency in programming languages like Python, Java, and C++, as well as mastered the art of software design and architecture. I've delved into data structures and algorithms, enabling me to create efficient and robust solutions to complex problems.
                </p>
                </div>
        </div>
            <div className="grid-container">
                <div className="duration1"><p>2019 - 2021</p></div>
                <div className="secondtitle1"><p>Software Development Internship - XYZ Tech Solutions</p></div>
                <div className="paragraph1">
                    <p>
                        Collaborated with a cross-functional team to develop and optimize a customer-facing web application. Assisted in debugging and troubleshooting software issues, leading to a 20% improvement in application performance
                    </p>
                </div>
            </div>
            <div className="grid-container">
                <div className="duration1"><p>2017 - 2019</p></div>
                <div className="secondtitle1"><p>Freelance Web Development Projects</p></div>
                <div className="paragraph1">
                    <p>
                        Worked as a freelance web developer, collaborating with small businesses to design and develop responsive websites. Managed project timelines, client communication, and delivered tailored solutions to meet client objectives.
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
                    y: ev.pageX
                })

                const color = getComputedStyle(document.documentElement).getPropertyValue('--x');
                document.documentElement.style.setProperty('--x', pageX + "px");
                document.documentElement.style.setProperty('--y', pageY + "px");

                console.log(ev.pageX, ev.pageY)

            }

            window.addEventListener("mousemove", updateMousePosition);

            return () => {
                window.removeEventListener("mousemove", updateMousePosition)
            }
    }, []);

    function About() {
        return(<div className="about">
            <h1>About</h1>
            <p>Quisque lacus tellus, consectetur ac interdum non, condimentum vulputate lacus. Aliquam sem elit, tempus aliquet ultrices at, hendrerit sed arcu. Morbi condimentum aliquet dolor eu commodo. Morbi vestibulum nisl vitae sapien tristique varius.</p>
            <p>Praesent vel tortor id purus molestie molestie et in elit. Proin suscipit lectus ac ligula rutrum, at fringilla purus laoreet. Ut dolor metus, congue eget quam in, tempor finibus nibh. Nulla ac elit lacus. Quisque mollis dictum nunc, vitae ultrices elit lobortis a. Proin velit ligula, sodales ac ante nec, vehicula placerat mauris.</p>
            <p>Nunc diam augue, feugiat eget placerat sit amet, mattis nec diam. Etiam sit amet efficitur magna. Morbi eros neque, hendrerit et urna eget, porttitor fermentum ex. Vivamus quis leo non tellus aliquet aliquet.</p>
        </div>)
    }




    return (
        <>
            <div className="wrapper">
                <div ref={heroRef} id="App" className="App">
                    <Title></Title>
                    <About></About>
                    <Experiences></Experiences>
                </div>
            </div>
        </>
            )
}

export default App;
