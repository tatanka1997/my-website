import React from "react"
import { colors } from "../links"
import GithubIcon from "./icons/github"
import LinkedinIcon from "./icons/linkedin"
import InstagramIcon from "./icons/instagram"
import EmailIcon from "./icons/email"
import "../styles/about.css"
import imageSrc from "../images/icon.png"
const About = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        marginTop: "2rem",
      }}
    >
      <img
        src={imageSrc}
        alt="Icon"
        style={{
          width: "200px",
          marginBottom: "1rem",
          backgroundColor: colors.lblue,
        }}
      />
      <p
        style={{
          color: colors.yellow,
        }}
      >
        Hello, my name is Erik Nurja, and I'm a Software Engineer. I hold a
        Bachelor's degree in Computer Science from San Diego State University,
        where I gained a strong foundation in software development. With 2 years
        of professional experience in software development, I have honed my
        skills and expertise in this field. In addition to my software
        engineering background, I also have valuable experience working as a
        Network Engineer, which has provided me with a comprehensive
        understanding of network infrastructure
      </p>
      <p
        style={{
          color: colors.yellow,
        }}
      >
        Currently, I am employed as a Conference Network Technician, where I
        handle network-related responsibilities and contribute to various
        projects. Alongside my professional work, I actively engage in personal
        projects that allow me to explore and expand my technical abilities.
        Please feel free to schedule a meeting by clicking the link below.
      </p>
      <p
        style={{
          color: colors.yellow,
        }}
      >
        During my free time, will be watching AC Milan, Boston Celtics, and
        Montreal Canadiens. Additionally, I enjoy engaging in discussions about
        AI, cryptocurrency, and various books I'm currently reading. If you
        would like to get in touch, please don't hesitate to reach out to me via
        email or any of the social platforms I have provided below. Thank you,
        and I look forward to connecting with you soon!
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
      ></div>
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
