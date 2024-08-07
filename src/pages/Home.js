import React from 'react'
import {Link} from "react-router-dom";
//Routing

//styles
import "../css-components/Home.css"

//assets & icons
import { 
    Email, 
    LinkedIn,
    } from '@material-ui/icons'
import GithubIcon from "@material-ui/icons/GitHub"

import profile from "../assets/profile.JPG"

const ButtonMailto = ({ mailto}) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            <Email />
        </Link>
    );
};



function Home() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
 
  return (
    <div className = "home">
        <div className="about">
            <h2> Hi, I'm Yahvin</h2>
            <div className="prompt">
                <p> An aspiring machine learning engineer with a passion for learning that's out of this world!</p>
                <p> <small> <small> (Star Wars pun intended) </small> </small></p>
                <div className="social">
                <div className="socialButtons">
                <button onClick={() => {
                    window.location.href = "mailto:yahvin@gmail.com";
                }}>
                    <Email />
                </button>

                <button onClick={() => {
                    openInNewTab("https://www.linkedin.com/in/yahvin-gali/");
                    return null;
                }}> 
                    <LinkedIn />
                </button>

                <button onClick={() => {
                    openInNewTab("https://github.com/Ygali04");
                    return null;
                }}> 
                    <GithubIcon/>
                </button>
                </div>
                </div>
            </div>
        </div>

        <div className="skills">
            <h1> Skills </h1>
            <ol className="list">
                <li className="item">
                    <h2> Front-End</h2>
                    <span> C, C#, C++, JAVA, Javascript, React, Express, Node.JS, Next.JS, HTML, CSS </span>
                </li>

                <li className="item">
                    <h2> Back-End</h2>
                    <span> PostgreSQL, MongoDB, DynamoDB, DocumentDB, DragonflyDB, Redis, Firebase </span>
                </li>

                <li className="item">
                    <h2> AI & ML </h2>
                    <span> Python (NumPy, Pandas, Pytorch, TensorFlow), LangChain, Hugging Face, LlamaIndex, Ollama, Docker, Weaviate</span>
                </li>

                <li className="item">
                    <h2> Cloud Computing</h2>
                    <span> Google Cloud, Firebase, AWS (Amplify, Lightsail, EC2, Sagemaker, Bedrock)</span>
                </li>

                <li className="item">
                    <h2> Other</h2>
                    <span> OCaml, Prolog, Scheme, Bash, Git, Flutter, Swift</span>
                </li>
            </ol>
        </div>

        <div className="aboutCont">
            <h1> About Me </h1>
            <div className="bio"> 
                <img src={profile} alt="My Profile Image" />
                <p> Aspiring AI Engineer. Ardent environmentalist. Believer in upliftment through service. Thalassophile. Rookie food experimentalist who brews a mean Chai. Loves to play Piano. </p>
            </div>
        </div>
    </div>
  )
}


export default Home