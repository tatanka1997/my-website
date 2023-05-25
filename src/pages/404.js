import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"


const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export const Head = () => 
<Helmet>
  <title>404 Page not found. Go back </title>
</Helmet>


export default NotFoundPage
