import React from "react"
import { Link } from "gatsby"
import { MapContainer } from 'react-leaflet'
import { BasemapLayer, FeatureLayer} from 'react-esri-leaflet'
const EconomicRegions = props => {
  const { pageContext } = props
  const { pageContent, aggregateData } = pageContext

  return (
    <div className="container">
      <div className="breadcrumb">
        <Link to="/">Home</Link><span>/ Economic Regions / </span>
      </div>
      <div>
        {pageContent.map((data, index) => {
          return <h1 id="wb-cont" key={`content_title_${index}`}>{data.title}</h1>
        })}
      </div>
      <div style={{ display: "flex" }}>
        <p style={{ width: "50%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul style={{ marginLeft: "29%" }}>
          {aggregateData.map((item, index) => {
            return (
              <li className="Region-Summary" key={`aggregateData_${index}`}>
                {item.item}
              </li>
            )
          })}
        </ul>
      </div>

      <div>
      <MapContainer zoom={2}>

        <BasemapLayer name="DarkGray" />

        <FeatureLayer url={"https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/nhsl_en/MapServer/6"} />
      </MapContainer>
      </div>
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
