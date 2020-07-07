import React from "react"
import { Section } from "../../styles"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const Offer = ({ data }) => {
  const { frontmatter } = data
  const { title, buttonText, price, subtitle, text, image } = frontmatter
  return (
    <StyledSection>
      <StyledBackgroundImage
        fluid={image.childImageSharp.fluid}
      ></StyledBackgroundImage>
      <Wrapper>
        <div className="heading">
          <Heading>{title}</Heading>
          <SubHeading>{subtitle}</SubHeading>
          <Price>
            <h1 className="price-1">$</h1>
            <h1 className="price-2">{price}</h1>
            <h1 className="price-1">99</h1>
          </Price>
        </div>

        <h3 className="offer">{text}</h3>
        <Button>{buttonText}</Button>
      </Wrapper>
    </StyledSection>
  )
}

const StyledSection = styled(Section)`
  height: 50vh;
  min-height: 200px;
  position: relative;
  padding: 0;
  margin-top: 5rem;
  position: relative;
  box-shadow: 0 1.5 4rem rgba(0, 0, 0, 0.2);
`
const StyledBackgroundImage = styled(BackgroundImage)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1 !important;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
const Wrapper = styled.div`
  background: linear-gradient(
    to right,
    rgba(24, 24, 24, 0.95) 30%,
    rgba(0, 0, 0, 0.1) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .heading {
    display: flex;
    flex-direction: column;
    padding-left: 5rem;
    align-items: flex-start;
    font-family: var(--ff-three);
   
  }
  .offer {
    color: white;
    margin-top: 2rem;
    margin-left: 5rem;
    font-size: var(--fs-2);
    font-family: var(--ff-three);
  }
`
const Heading = styled.h1`
  color: var(--color-main);
  font-size: var(--fs-11);
  margin: 0;
  line-height: 1.3;
  font-family: var(--ff-three);
  
`

const SubHeading = styled.h3`
  font-size: var(--fs-5);
  color: white;
  font-family: var(--ff-three);
  
`

const Price = styled.div`
  font-size: var(--fs-11);
  display: inline-block;
  display: flex;
  justify-content: center;
  margin: 2rem;
  color: #f9b129;
  font-family: var(--ff-one);
  

  .price-1 {
    font-size: var(--fs-11);
    line-height: 1.4;
  }
  .price-2 {
    font-size: 10rem;
    line-height: 1;
  }
`

const Button = styled.button`
  background: var(--color-second);
  color: white;
  font-weight: 700;
  border-radius: 3px;
  text-transform: uppercase;
  padding: 0.7em 0.8em;
  font-size: var(--fs-4);
  margin: 2rem 5rem;
`

export default Offer
