import styled from "styled-components"

export const FooterDiv = styled.div`
  text-align: center;
  background: #fafafa;
  padding-bottom: 50px;
  padding-top: 20px;

  img {
    margin-top: 50px;
    height: 30px;
  }

  a {
    color: black;
    padding: 10px;
  }

  h1 {
    font-size: 1.5em;
    margin: 6px 0;
  }
`;

export const FooterGroup = styled.div`
  display: grid;
  margin-top: 30px;
  grid-template-columns: 200px 200px;
  justify-content: center;

  p {
    margin: 3px;
  }
`;

export const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 50px);
  justify-content: center;
`;
