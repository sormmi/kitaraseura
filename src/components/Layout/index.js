import { graphql, useStaticQuery } from "gatsby"
import Header from "../Header"
import Footer from "../Footer"
import PropTypes from "prop-types"
import React from "react"

import { ThemeProvider} from "styled-components"
import { GlobalStyles, lightTheme} from "../../styles/GlobalStyles"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>
      <Footer lang="fi" />

    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
