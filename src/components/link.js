import React from "react";
import { colors } from "../links";

const Link = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* Contact */}
      <div style={{ marginRight: "auto", marginLeft: "1rem" }}>
        <h3 style={{ color: colors.yellow, fontFamily: "'Abril Fatface', sans-serif" }}>
          Contact
        </h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <a href="mailto:eriknurja12@gmail.com" style={{color: colors.yellow}}>Email</a>
          </li>
          <li>
            <a href="https://calendly.com/eriknurja" style={{color: colors.yellow}} target="_blank">Schedule a meeting</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/enurja/" style={{color: colors.yellow}} target="_blank">Linkedin</a>
          </li>
          <li>
            <a href="https://github.com/tatanka1997" style={{color: colors.yellow}} target="_blank">Github</a>
          </li>
        </ul>
      </div>

      {/* Projects */}
      <div style={{ margin: "0 auto" }}>
        <h3 style={{ color: colors.yellow, fontFamily: "'Abril Fatface', sans-serif" }}>
          Projects
        </h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <a href="https://github.com/tatanka1997/Report_generator" style={{color: colors.yellow}} target="_blank">Report Generator</a>
          </li>
          <li>
            <a href="https://github.com/tatanka1997/FaceMaskDetection" style={{color: colors.yellow}} target="_blank">Face Mask Detection System</a>
          </li>
          <li>
            <a href="https://github.com/tatanka1997/my-website" style={{color: colors.yellow}} target="_blank">Personal Website</a>
          </li>
          <li>
            <a href="https://github.com/tatanka1997/django-project" style={{color: colors.yellow}} target="_blank">Reccomender</a>
          </li>
        </ul>
      </div>

      {/* Work */}
      <div style={{ marginLeft: "auto", marginRight: "1rem" }}>
        <h3 style={{ color: colors.yellow, fontFamily: "'Abril Fatface', sans-serif" }}>
          Work
        </h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <a href="https://www.singledigits.com/" style={{color: colors.yellow}} target="_blank">Single Digits</a>
          </li>
          <li>
            <a href="https://class-solutions.net/" style={{color: colors.yellow}} target="_blank">Class Heuristic Solutions</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Link;
