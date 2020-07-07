import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql } from "gatsby"
import Menu from "../components/Menu/Menu"

const MenuPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Menu" />

      <Menu image={data.img.childImageSharp.fluid} />
    </Layout>
  )
}
export const query = graphql`
  {
    img: file(relativePath: { eq: "menu.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default MenuPage
