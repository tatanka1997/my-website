import React from "react";
import { colors } from "../links";
import { Link } from "gatsby";

const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        flexDirection: `row`,
        alignItems: `center`,
        justifyContent: `space-between`,
        backgroundColor: colors.lblue,
      }}
    >
      <div style={{ textAlign: `left`, marginTop: "1rem" }}>
        <h1
          style={{
            fontSize: `var(--font-lg)`,
            margin: `0`,
            marginLeft: '1rem',
            fontFamily: "'Abril Fatface', sans-serif",
          }}
        >
          <Link to="/" style={{ color: colors.yellow, textDecoration: "none" }}>
            Erik Nurja
          </Link>
        </h1>
      </div>
      <div style={{ textAlign: "right", marginTop: "1rem" }}>
        <a
          href="https://www.dropbox.com/s/vopm3atu2ubk429/Nurja_Erik_Resume.pdf?dl=0"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: colors.yellow,
            textDecoration: "none",
            marginRight: "1rem",
            fontFamily: "'Abril Fatface', sans-serif",
            fontSize: `var(--font-lg)`,
          }}
        >
          Resume
        </a>
      </div>
    </header>
  );
};

export default Header;
