import React from "react"
import styled from "styled-components"
import Title from '../title'
import { Section } from "../../styles"
import Img from "gatsby-image"

const Food = ({ data }) => {
  const items = data.filter(({ node }) => node)
  return (
    <StyledSection>
      <div className="feature">
        <Title
          font={5}
          title="Our Food"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias
        officia tempora dicta at neque corporis ipsam"
        />

        <List>
          {items &&
            items.map(({ node }, index) => {
              const { frontmatter } = node
              const { title, subtitle, image } = frontmatter
              return (
                <ListItem key={index}>
                  <Img fixed={image.childImageSharp.fixed} />
                  <div>
                    <h4 className="feature-heading">{title}</h4>
                    <p className="feature-text">{subtitle}</p>
                  </div>
                </ListItem>
              )
            })}
        </List>
      </div>
    </StyledSection>
  )
}

export default Food

const StyledSection = styled(Section)`
  background-color: var(--color-grey-light-1);

  .feature {
    margin: 3rem auto;
    max-width: 1100px;
    padding: 0rem 5rem;
  }
`
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 30rem);
  grid-gap: 5rem;
  margin: 10rem auto;
  justify-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 5rem auto;
  }
`

const ListItem = styled.li`
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 300px;
  padding: 2rem;
  -webkit-box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.2);

  .feature-heading {
    font-size: var(--fs-5);
    font-weight: 700;
    text-transform: capitalize;
    margin-top: 2rem;
    text-align: center;
    color:  var(--color-primary);
  }

  .feature-text {
    font-size: var(--fs-4);
    text-align: center;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 1rem auto;
    color: var(--color-grey-dark-1);
  }
`
