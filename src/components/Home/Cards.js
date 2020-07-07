import React from "react"
import styled from "styled-components"
import { Section } from "../../styles"
import Img from "gatsby-image"

const StyledSection = styled(Section)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;
  padding-bottom: 0rem;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: ${props =>
    props.item % 2 === 0 ? `var(--color-main)` : "var(--color-second)"};
  .container {
    position: absolute;
    top: 0;
    left: 3rem;
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    color: white;
    z-index: 10;
  }
  .image {
    width: 45%;
    max-height: 100%;
    margin: 2rem;
    z-index: 9;
  }
`

const StyledButton = styled.button`
  background: transparent;
  color: white;
  font-weight: 700;
  border: 1px solid white;
  text-transform: uppercase;
  padding: 0.7em 0.8em;
  font-size: var(--fs-4);
`

const Heading = styled.div`
  text-transform: uppercase;
  font-weight: 700;

  .title {
    font-family: var(--ff-three);
    font-size: var(--fs-9);
    line-height: 1.2;
  .subtitle {
    font-family: var(--ff-three);
    font-size: var(--fs-2);
  }
`

const Cards = ({ data }) => {
  return (
    <StyledSection>
      {data &&
        data.map(({ node }, index) => {
          const { frontmatter } = node
          const { title, subtitle, image, buttonText } = frontmatter
          return (
            <Wrapper key={index} item={index}>
              <div className="image">
                <Img fluid={image.childImageSharp.fluid} />
              </div>
              <div className="container">
                <Heading>
                  <h1 className="title">{title}</h1>
                  <h3 className="subtitle">{subtitle}</h3>
                </Heading>

                <StyledButton>{buttonText}</StyledButton>
              </div>
            </Wrapper>
          )
        })}
    </StyledSection>
  )
}

export default Cards
