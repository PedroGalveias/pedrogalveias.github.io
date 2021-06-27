import './intro.scss'
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Software", "Blockchain", "Database"]
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/me.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello there! I am</h2>
                    <h1>Pedro Galveias</h1>
                    <h3><span ref={ textRef }></span> Engineer</h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/arrow_down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}
