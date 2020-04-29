import styled from "styled-components"

const HeroSection = styled.section`
  background: url('${props => props.backgroundImage}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: ${props => props.theme.height};

  text-align: center;
  
  div {
    max-width: 920px;
    margin: auto 0;
    background: rgba(0, 0, 0, 0.25);
    padding: 20px 50px;
    font-size: 1.2em;
  }
  
  h1 {
    color: white;
  }
`;

export default HeroSection;
