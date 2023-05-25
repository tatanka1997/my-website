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
        flexDirection: `column`,
        backgroundColor: colors.lblue,
        justifyContent: `space-between`,
      }}
    >
      <div style={{ textAlign: `left` }}>
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
    </header>
  );
};

export default Header;
