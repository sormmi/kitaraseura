import React from "react"

import { Wrapper, StyledBGImage, Content } from "./BGImage.styles"

const BGImage = ({ fluid, title, className, children }) => (
  <Wrapper>
    <StyledBGImage fluid={fluid} title={title} />
    <Content className={className}>{children}</Content>
  </Wrapper>
)

export default BGImage
