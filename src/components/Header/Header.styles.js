import styled from "styled-components"

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  height: 90px;
  margin: 20px auto;
  
  @media screen and (min-width: 768px) {
    height: 66px;
  }
`
export const Branding = styled.div`
  margin: auto 0;
  min-width: 100px;

  a {
    font-size: 20px;
    color: ${ props => props.theme.colors.textDark };
    font-weight: bold;
    text-decoration: none;
    margin: auto 10px;
  }
`;

export const Logo = styled.img`
  max-width: 200px;
 
  @media screen and (min-width: 768px) {
    max-width: 300px;
  }
`


