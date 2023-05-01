// Taz Khallaf 2023-04-21
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Wow look at me, I'm Joe and I'm cute af.</p>
      <StaticImage
        alt="Ree"
        src="../images/Joe.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage