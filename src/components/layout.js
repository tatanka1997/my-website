import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { colors } from "../links";
import Header from "./header";
import Footer from "./footer";
import About from "./about";
import Link from "./link";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
          }
        `}</style>
      </Helmet>
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

      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "96.5vh",
          backgroundColor: colors.lblue,
          
        }}
      >
           <About />
        <div
          style={{
            flex: "1",
            margin: "0 auto",
            maxWidth: "var(--size-content)",
            padding: "var(--size-gutter)",
            backgroundColor: colors.lblue
          }}
        >
        </div>
        <Link />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
