import { createGlobalStyle } from "styled-components"

export const colors = {
  white: "#fff",
  darkGray: "#1a1c20",
  deepDarkGray: "#404040",
  blueShade1: "#215973",
  blueShade2: "#6fadc6",
  blueShade3: "#d1e1e9",
  redShade: "#bf3030"
}

export const lightTheme = {
  colors: {
    background: colors.white,
    menuBackground: colors.blueShade3,
    textDark: colors.blueShade1,
    textMain: colors.blueShade2,
    textSecondary: colors.deepDarkGray,
    textDanger: colors.redShade
  }
}

export const darkTheme = {
  colors: {
    background: colors.darkGray,
    menuBackground: colors.blueShade1,
    textDark: colors.blueShade3,
    textMain: colors.blueShade2,
    textSecondary: colors.blueShade3,
    textDanger: colors.redShade
  }
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --site-max-width: 1200px;
  }
  
  @font-face {
    font-family: "Lato";
    font-weight: 300;
    font-style: normal;
  }
  
  body {
    background: ${ props => props.theme.colors.background };
    color: ${ props => props.theme.colors.textSecondary };
    font-family: "Lato", Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    transition: all 0.5s ease;
  }
  
  main {
    margin: 0 auto;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: ${ props => props.theme.colors.textDark };
    font-family: "Lato", Arial, Helvetica, sans-serif;
    transition: all 0.5s ease;
    letter-spacing: 1px;
  }
  
  h2 {
    font-size: 1.3rem;
    letter-spacing: 1.8px;
    margin: 30px 0 10px 0;
    
    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
  
  h3 {
    font-size: 1.4rem;
    letter-spacing: 1.5px;
    margin: 30px 0 0 0;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.4;
    
    @media screen and (min-width: 768px) {
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }
  
  a {
    line-height: 1.5;
  }
  
  a:link {
    text-decoration: none;
  }
  
  a:visited {
    text-decoration: none;
  }
  
  li {
    line-height: 1.5;
    font-size: 1.1em;
  }
  
  .container {
    padding: 20px;
    max-width: 920px;
    margin: 0 auto;
    
    p.block-img {
      float: right;
      margin: 20px;
    }
  }
  
  .main-container {
    position: relative;
    min-height: 100vh;
  }
`
