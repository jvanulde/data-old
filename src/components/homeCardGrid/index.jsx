import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

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
  `);

  return (
    <>
    <div className="col-md-12">
    <h2>View Data</h2>
      <Link to="/en/National-Datasets">National Scale Datasets</Link>
      <div className="">
      <Link to="/en/Provinces-and-Territories">Provinces and Territories Datasets</Link>
    </div>
   </div>
    <div className="col-md-12 LNU">
      <h2>Latest News & Updates</h2>
      <Link to={data.markdownRemark.frontmatter.slug}>
        <p>{data.markdownRemark.frontmatter.title}</p>
      </Link>
    </div>
    </>
  );
};

export default HomeCardGrid;
