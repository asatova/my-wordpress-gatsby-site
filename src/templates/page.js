import React from “react”
import { graphql } from “gatsby”
import Layout from “../components/layout.js”
import SEO from “../components/seo”

const PageTemplate = () => (
    <Layout>
        <SEO />
        PageTemplate
    </Layout>
)

export default PageTemplate


import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import SEO from "../components/seo"
const PageTemplate = ({ data }) => (
    <Layout>

        <SEO
            title={data.wpPage.title}
            description={data.wpPage.excerpt}
        />
        <h1>{data.wpPage.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
    </Layout>
)
export default PageTemplate
export const query = graphql`
 query($id: String!) {
   wpPage(id: { eq: $id }) {
     title
     content
   }
 }
`