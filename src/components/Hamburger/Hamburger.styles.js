import styled from "styled-components"

export const HamburgerIcon = styled.div`
  display: block;
  width: 30px;
  margin: auto 10px;
  z-index: 1000;
  cursor: pointer;
  
  :after, 
  :before, 
  div {
    display: block;
    height: 4px;
    margin: 5px 0;
    background: ${ props => props.theme.colors.textDark };
    border-radius: 2px;
    content: '';
    transition: all 0.2s ease-in-out;
  }
  
  :before {
    transform: ${ props => props.menuOpen ? 'translateY(9px) rotate(-45deg)' : '' };
  }
  
  :after {
    transform: ${ props => props.menuOpen ? 'translateY(-9px) rotate(45deg)' : '' };
  }
  
  div {
    transform: ${ props => props.menuOpen ? 'scale(0)' : '' };
  }
  
  @media screen and (min-width: 768px) {
    display: none;
  }
`
