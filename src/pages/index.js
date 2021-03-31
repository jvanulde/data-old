import React from "react"
// import { Link } from "gatsby"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import HomeCardGrid from "../components/homeCardGrid/index.jsx"
import { SliderData } from '../../config/SliderData'

const IndexPage = () => (
  <div className="container">
    <SEO title="Home" />
    <Banner slides={SliderData} />
    <HomeCardGrid/>
  </div>
)

export default IndexPage
