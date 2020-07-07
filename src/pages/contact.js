import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Contact from "../components/Contact"
import Banner from "../components/banner"
import Header from "../components/header"

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Header img={data.img.childImageSharp.fluid}>
        <Banner
          title="get in touch"
          subtitle="You can use our quick contact form to ask a question about our services that we offer on a regular basis. We would be pleased to answer your questions."
        ></Banner>
      </Header>
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default ContactPage

//
