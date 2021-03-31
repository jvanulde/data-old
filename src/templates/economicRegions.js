import React from 'react'
import { Link } from "gatsby"
import  MapboxGlMap  from '../components/RegionMap/MapboxGlMap'
const EconomicRegions = props => {
  const { pageContext } = props
  const { pageContent, aggregateData } = pageContext

  return (
    <div className="container">
      <div className="breadcrumb">
        <Link to="/">Home </Link><span>/ Economic Regions / </span>
      </div>
      <div className="ER-container">
        {pageContent.map((data, index) => {
          return <h1 id="wb-cont" key={`content_title_${index}`}>{data.title}</h1>
        })}
            <div className="col-md-6 pull-left">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        </div>
        <ul className="col-md-4 pull-right">
          {aggregateData.map((item, index) => {
            return (
              <li className="Region-Summary" key={`aggregateData_${index}`}>
                {item.item}
              </li>
            )
          })}
        </ul>
      
      </div>
      <section>
        <div className="container">
      <MapboxGlMap />
      </div>
      </section>
      {/* <Link
        to="/indicators/"
        state={{
          modal: true,
        }}
      >
        Indicators
      </Link> */}
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Updated</th>
              <th>Format</th>
            </tr>
          </thead>
          <tbody>
        <tr>
          <td>Multi Hazard Threat (Census Subdivision)</td>
          <td>Mon, Jan 25, 21</td>
          <td>
            <span className="label label-default">.gpkg </span>
            <button className="btn btn-primary btn-sm map-link pull-right">
              View On Map
            </button>
          </td>
        </tr>
        <tr>
          <td>Physical Exposure (Buildings)</td>
          <td>Mon, Jan 25, 21</td>
          <td>
            <span className="label label-default">.gpkg </span>
            <button className="btn btn-primary btn-sm map-link pull-right">
              View On Map
            </button>
          </td>
        </tr>
        <tr>
          <td>Risk Dynamics</td>
          <td>Mon, Jan 25, 21</td>
          <td>
            <span className="label label-default">.gpkg </span>
            <button className="btn btn-primary btn-sm map-link pull-right">
              View On Map
            </button>
          </td>
        </tr>
        <tr>
          <td>Social Fabric (Census Subdivision) </td>
          <td>Mon, Jan 25, 21</td>
          <td>
            <span className="label label-default">.gpkg </span>
            <button className="btn btn-primary btn-sm map-link pull-right">
              View On Map
            </button>
          </td>
        </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EconomicRegions
