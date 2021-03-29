import React from "react"
// import { Link } from "gatsby"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import HomeCardGrid from "../components/homeCardGrid"
import { SliderData } from '../../config/SliderData'

const IndexPage = () => (
  <div className="container">
    <SEO title="Home" />
    <Banner slides={SliderData} />
      <div className="banner col-md-12">
    <HomeCardGrid/>
    </div>
  </div>
)

export default IndexPage
