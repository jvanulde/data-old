import React from "react"
import NTMapComponent from "../../svg/NT-Generalized.svg"
import YAMLData from "../../../content/data/yaml/prov-terr.yaml"
import { Link } from "gatsby"
import '../../styles/theme-wet-boew/css/ie8-theme.css'


const NorthwestTerritories = () => {
  return (
    <>
      <div className="container provincial-banner">
      <div className="breadcrumb"><Link to="/en/Provinces-and-Territories">Provinces and Territories</Link> / Northwest Territories</div>
        <div className="provincial-data">
          <h1 id="wb-cont">{YAMLData.enNameNT}</h1>
        </div>
        <section className="gc-srvinfo col-md-3 pull-left">
          <ul>
            {YAMLData.enContentNT.map((data, index) => {
              return (
                <li key={`enContentNT_region_${index}`}>
                  <Link to={data.url}>{data.title}</Link>
                </li>
              )
            })}
          </ul>
        </section>
        <section className="col-lg-9 col-s-4 pull-right">
          <img
            className="prov-map"
            src={NTMapComponent}
            alt="Economic Regions of Northwest Territories"
          />
        </section>
      </div>
      <section className="container">
        <div className="container">
          <h2>Provincial Level Datasets</h2>
          <table
            className="table table-hover"
            style={{
              marginTop: "5vh",
            }}
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Date Modified</th>
                <th>Format</th>
              </tr>
            </thead>
            <tbody>
              {YAMLData.downloads.map((data, index) => {
                return (
                  <tr key={`downloads_${index}`}>
                    <td key={`downloads_file_title_${index}`}>{data.title}</td>
                    <td key={`downloads_file_lastUpdated_${index}`}>
                      {data.lastUpdated}
                    </td>
                    <td key={`downloads_file_format_${index}`}>
                      <span className="label label-default">{data.format}</span>
                    </td>
                    <td key={`downloads_file_url_${index}`}>
                      <a
                        className="btn btn-primary btn-sm pull-right"
                        href={data.url}
                        download
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          </div>
        </section>
        <section className="container">
          <div className="container">
      <h2>Economic Region Level Datasets</h2>


      <table className="table table-hover container">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date Modified</th>
              <th>Format</th>
            </tr>
          </thead>
          <tbody>
            {YAMLData.downloads5910.map((data, index) => {
              return (
                <tr key={`downloads5910_${index}`}>
                  <td key={`downloads5910_threat_title_${index}`}>
                    {data.title}
                  </td>
                  <td
                    key={`downloads5910_threat_lastUpdated_${index}`}
                  >
                    {data.lastUpdated}
                  </td>
                  <td key={`downloads5910_threat_format_${index}`}>
                    <span className="label label-default">
                      {data.format}
                    </span>
                  </td>
                  <td key={`downloads5910_threat_url_${index}`}>
                    <a
                      className="btn btn-primary btn-sm pull-right"
                      href={data.url}
                      download
                    >
                      Download
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
  </table>
  </div>
  </section>
    </>
  )
}

export default NorthwestTerritories