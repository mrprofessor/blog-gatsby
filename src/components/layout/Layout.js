import React from "react";
import Nav from "../nav/Nav";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import { createGlobalStyle } from "styled-components";

// Added styled components for faster font loading
// https://markoskon.com/extremely-fast-load-time-with-gatsby-and-self-hosted-fonts/
// @import url('https://fonts.googleapis.com/css?family=Overpass+Mono&display=swap+Display:400,700');
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Overpass+Mono&display=swap+Display:400,700');
  @import url('https://fonts.googleapis.com/css?family=Noticia+Text&display=swap+Display:400,700');
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Noticia Text','Georgia',sans-serif;
  }
  h1, h2, h3, nav, pre, .post-title, .date-label {
    font-family: 'Overpass Mono', monospace;
  }
`;

// Need to use StaticQuery while quering in side a non-page component.
const Layout = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div className="layout">
        <GlobalStyle />
        <div className="title-wrapper">
          <Link to="/">
            <h2 className="title">{data.site.siteMetadata.title}</h2>
          </Link>
          <Nav />
        </div>
        {props.children}
      </div>
    )}
  />
);

export default Layout;
