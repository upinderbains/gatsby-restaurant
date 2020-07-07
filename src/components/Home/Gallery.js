import React from "react"
import styled from 'styled-components'
import {Section} from "../../styles/"
import Img from 'gatsby-image'


const Gallery = ({data}) => {
  return <StyledSection>{data && data.map(({node}, index) => {

    return <Img fluid={node.childImageSharp.fluid}  />
  })}</StyledSection>
}

export default Gallery


const StyledSection = styled(Section)`
padding: 0;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(1, 20vw);

@media(max-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 30vw);
}
@media(max-width: 568px) {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 50vw);
}

`