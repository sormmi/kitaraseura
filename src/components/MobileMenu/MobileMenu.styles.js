import styled, { createGlobalStyle } from "styled-components"

export const OverrideGlobalStyle = createGlobalStyle`
  body {
    overflow: ${props => props.menuOpen ? 'hidden': 'auto' };
  }
`

export const MenuWrapper = styled.div`
  display: block;
  position: fixed;
  right: ${props => props.menuOpen ? '45px' : '-300px'};
  width: 200px;
  background: ${props => props.theme.colors.menuBackground};
  top: 0;
  padding: 0 0 0 20px;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  
  @media screen and (min-width: 768px) {
    display: none; 
  }
`

export const Nav = styled.ul`
  position: absolute;
  width: 100%;
  top: 80px;
  list-style-type: none;
  padding: 10px;
  font-family: "Lato", Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  background: white;
  border: 1px solid #ccc;
  
  a {
    text-decoration: none;
    color: ${ props => props.theme.colors.textDark }
  }
  
  li {
    transition: opacity 0.5s ease;
    cursor: pointer;
    margin: 10px 0;
    
    .active {
      font-weight: 800;
    }
    
    :hover {
      opacity: 0.7;
    }
  }
  
  @media screen and (min-width: 768px) {
    display: block; 
  }
`
