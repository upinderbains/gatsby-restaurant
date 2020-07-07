import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .title {
    letter-spacing: 0.4rem;
    font-size: var(--fs-7);
    text-transform: uppercase;
    color: var(--color-main);
   
  }
  .subtitle {
    margin-top: 2rem;
    letter-spacing: 0.4rem;
    font-size: ${({ font }) => (font ? `var(--fs-${font})` : "var(--fs-5)")};
    text-align: center;
    font-family: var(--ff-two);
    color:  var(--color-grey-dark-1);
   
  }
`

const Title = ({ title, subtitle, font }) => {
  return (
    <Wrapper font={font}>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle}</h3>
    </Wrapper>
  )
}

Title.defaultProps = {
  subtitle: "our subtitle",
  title: "our title",
}
export default Title
