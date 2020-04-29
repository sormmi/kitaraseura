import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container">
      <h1>Oops, sivua ei löytynyt...</h1>
      <p><Link to="/">Palaa tästä sivuston alkuun</Link></p>
    </div>
  </Layout>
)

export default NotFoundPage
