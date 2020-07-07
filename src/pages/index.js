import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Header from "../components/header"
import Banner from "../components/banner"
import { Button } from "../styles"
import { Gallery, Food, Offer, Cards } from "../components/Home"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Header home img={data.landing.childImageSharp.fluid}>
      <Banner title="Food Route" subtitle="4578 Marmora St, Toronto CA">
        <Button banner style={{ margin: "2rem auto" }}>
          order online
        </Button>
      </Banner>
    </Header>
    <Cards data={data.card.edges} />
    <Offer data={data.offers} />
    <Food data={data.about.edges} />
    <Gallery data={data.gallery.edges} />
  </Layout>
)

export const query = graphql`
  {
    landing: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            image {
              childImageSharp {
                fixed(quality: 90, width: 250, height: 200) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    gallery: allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    offer: file(relativePath: { eq: "coffee1.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    card: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/card/" } }) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            buttonText
            image {
              childImageSharp {
                fluid(quality: 90) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    offers: markdownRemark(fileAbsolutePath: { regex: "/offers/" }) {
      frontmatter {
        title
        buttonText
        price
        subtitle
        text
        image {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
export default IndexPage
