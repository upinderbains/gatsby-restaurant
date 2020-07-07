import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const Header = ({ img, children, home }) => (
  <StyledBackgroundImage fluid={img} index={home}>
    {children}
  </StyledBackgroundImage>
)

export default Header

const StyledBackgroundImage = styled(BackgroundImage)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: ${props => (props.index ? "calc(100vh - 70px)" : "60vh")};
  opacity: 1 !important;
  background-color: rgba(0, 0, 0, 0.4) !important;
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`
