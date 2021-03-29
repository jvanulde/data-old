import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"

const HomeCardGrid = () => {
    const data = useStaticQuery(graphql`
    query {
        markdownRemark {
            frontmatter {
              title
              slug
              date
            }
            id
          }
    }
  `)

    return (
        <div className="Grid">
            <div className="economic-region-insights">
                <div className="path">
                  <div className="section-title"><Link to="/en/National-Datasets">National Scale Datasets</Link></div>
                </div>
            </div>

            <div className="download-economic-region-insights">
                <div className="path">
                   <div className="section-title"><Link to="/en/Provinces-and-Territories">Provinces and Territories Datasets</Link></div> 
                </div>
            </div>

            <div className="contact-opendrr">
                <div className="path">
                  <div className="section-title"><Link to="/">Have a Question or Concern?</Link></div>
                </div>
            </div>




            <div className="news-updates">
            <p className="blog-title">Latest News & Updates</p>
            <hr/>
            <div className="container">
            <Link to={data.markdownRemark.frontmatter.slug}> 
            <p>{data.markdownRemark.frontmatter.title}</p>   
            </Link>
            </div>
            <hr/>
            </div>
        </div>
    )
}


export default HomeCardGrid