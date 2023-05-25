import React from "react";
import { colors } from "../links";

const Footer  = ({ siteTitle }) => {
return(
<footer
          style={{
            padding: "var(--size-gutter)",
            color: colors.yellow,
            backgroundColor: colors.lblue,
            margin: `0`,
            marginLeft: '1rem',
            
          }}
        >
          © {new Date().getFullYear()} &middot; Erik Nurja
        </footer>

);
};

export default Footer