import React from "react"
import { colors } from "../links"
import GithubIcon from "./icons/github"
import LinkedinIcon from "./icons/linkedin"
import InstagramIcon from "./icons/instagram"
import EmailIcon from "./icons/email"
import '../styles/about.css';
import imageSrc from '../images/icon.png';
; 

const About = () => {
  return (
    <div className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        marginTop: "2rem",
      }}
    >
        <img src={imageSrc} alt="Icon" style={{ width: "200px", marginBottom: "1rem", backgroundColor: colors.lblue }} />
      <p
        style={{
          color: colors.yellow,
        }}
      >
        Hello, my name is Erik Nurja and I'm a Software Engineer. I graduated
        with a Bachelors in Computer Science from San Diego State University. I
        have 2 years of experience in software development.
      </p>
      <p
        style={{
          color: colors.yellow,
        }}
      >
        I am currently working on many different Projects but still looking to
        join a team which will help me grow in the field. I have experience
        doing back-end development, data engineering and also mobile
        development. You can check out my resume which is linked below.
      </p>
      <p
        style={{
          color: colors.yellow,
        }}
      >
        On my free time, I will be either watching AC Milan or the Celtics. I
        love talking about AI, crypto, sports, or different books I'm reading.
        Feel free to reach out to me via email or any of the social platforms I
        have linked below!
      </p>
      <div
       style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "2vh",
        backgroundColor: colors.lblue,
        minWidth: "var(--size-content)", // Set the minimum width
          margin: "0 auto",
      }}
      >
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/enurja/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "0 0.5rem",
            fontSize: "1.5rem",
            color: colors.gray,
            textDecoration: "none",
          }}
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://github.com/tatanka1997"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "0 0.5rem",
            fontSize: "1.5rem",
            color: colors.gray,
            textDecoration: "none",
          }}
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.instagram.com/eriknurja/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "0 0.5rem",
            fontSize: "1.5rem",
            color: colors.gray,
            textDecoration: "none",
          }}
        >
          <InstagramIcon />
        </a>
        <a
          href="mailto:eriknurja12@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "0 0.5rem",
            fontSize: "1.5rem",
            color: colors.gray,
            textDecoration: "none",
          }}
        >
          <EmailIcon />
        </a>
      </div>
    </div>
  )
}

export default About
