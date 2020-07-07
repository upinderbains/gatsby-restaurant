import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  color: white;
  max-width: 900px;

  .title {
    font-size: 5rem;
    text-transform: uppercase;
    letter-spacing: 0.75rem;
    font-family: var(--ff-three);
    
  }

  .subtitle {
    letter-spacing: 0.15rem;
    font-size: 2rem;
    text-transform: capitalize;
    font-family: var(--ff-two);
  }
`

const Banner = ({ title, subtitle, children }) => {
  return (
    <Wrapper>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle}</h3>
      {children}
    </Wrapper>
  )
}

Banner.defaultProps = {
  title: "default title",
}

export default Banner
