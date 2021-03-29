import React from "react"
import ONMapComponent from "../../svg/ON-Generalized.svg"
import YAMLData from "../../../content/data/yaml/prov-terr.yaml"
import { Link } from "gatsby"
import { Accordion, Card, Button } from "react-bootstrap"
// import { MapContainer, TileLayer, LayersControl } from "react-leaflet"
// import  { EsriLeafletLayer } from "../../components/EsriLeafletLayer"
import '../../styles/theme-wet-boew/css/ie8-theme.css'


const Ontario = () => {
  return (
    <>
      <div className="container provincial-banner">
      <div className="breadcrumb"><Link to="/en/Provinces-and-Territories">Provinces and Territories</Link> / Ontario</div>
        <div className="provincial-data">
          <h1 id="wb-cont">{YAMLData.enNameON}</h1>
        </div>
        <section className="gc-srvinfo col-md-3 pull-left">
          <ul>
            {YAMLData.enContentON.map((data, index) => {
              return (
                <li key={`enContentON_region_${index}`}>
                  <Link to={data.url}>{data.title}</Link>
                </li>
              )
            })}
          </ul>
        </section>
        <section className="col-lg-9 col-s-4 pull-right">
          <img
            className="prov-map"
            src={ONMapComponent}
            alt="Economic Regions of Alberta Map"
          />
        </section>
      </div>
      <section className="container">
        <div>
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
          <h2>Economic Region Level Datasets</h2>
          <Accordion
            defaultActiveKey="0"
            style={{
              marginBottom: "20vh",
              marginTop: "5vh",
            }}
          >
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Vancouver Island & Coast (5910)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <table className="table table-hover">
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
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Lower Mainland Southwest (5920)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads5920.map((data, index) => {
                        return (
                          <tr key={`downloads5920_${index}`}>
                            <td key={`downloads5920_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads5920_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads5920_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads5920_threat_url_${index}`}>
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
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Thompson Okanagan (5930)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads5930.map((data, index) => {
                        return (
                          <tr key={`downloads5930_${index}`}>
                            <td key={`downloads5930_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads5930_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads5930_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads5930_threat_url_${index}`}>
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
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Kootenay (5940)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads5940.map((data, index) => {
                        return (
                          <tr key={`downloads5940_${index}`}>
                            <td key={`downloads5940_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads5940_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads5940_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads5940_threat_url_${index}`}>
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
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Cariboo (5950)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads5950.map((data, index) => {
                        return (
                          <tr key={`downloads5950_${index}`}>
                            <td key={`downloads5950_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads5950_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads5950_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads5950_threat_url_${index}`}>
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
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                  North Coast (5960)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads5960.map((data, index) => {
                        return (
                          <tr key={`downloads5960_${index}`}>
                            <td key={`downloads5960_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads5960_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads5960_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads5960_threat_url_${index}`}>
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
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="6">
                  Nechako (5970)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads5970.map((data, index) => {
                        return (
                          <tr key={`downloads5970_${index}`}>
                            <td key={`downloads5970_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads5970_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads5970_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads5970_threat_url_${index}`}>
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
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="7">
                  Northeast (5980)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="7">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads5980.map((data, index) => {
                        return (
                          <tr key={`downloads5980_${index}`}>
                            <td key={`downloads5980_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads5980_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads5980_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads5980_threat_url_${index}`}>
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
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </section>
      <section className="container">
        {/* <MapContainer
          doubleClickZoom={false}
          id="mapId"
          zoom={8}
          style={{ height: "100vh" }}
          center={{ lat: 5121238.451499999, lng: -5858630.3324 }}
        >
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
            attribution="Esri, USGS | Esri, Garmin, FAO, NOAA, NRCan, Parks Canada | Murray Journeay"
          />

          <LayersControl collapsed={false}>
            <LayersControl.BaseLayer name="Feature Layer" checked>
              <EsriLeafletLayer
                opacity={1}
                layerType="featureLayer"
                url="https://sampleserver6.arcgisonline.com/arcgis/rest/services/Earthquakes_Since1970/MapServer/0"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Tiled Map Layer">
              <EsriLeafletLayer
                opacity={1}
                layerType="tiledMapLayer"
                url="https://apps.fs.usda.gov/arcx/rest/services/EDW/EDW_WUI_2010_01/MapServer"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Base Map Layer">
              <EsriLeafletLayer
                opacity={1}
                layerType="basemapLayer"
                name="Imagery"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Dynamic Map Layer">
              <EsriLeafletLayer
                opacity={1}
                layerType="dynamicMapLayer"
                url="https://services.arcgisonline.com/arcgis/rest/services/Specialty/Soil_Survey_Map/MapServer"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Image Map Layer">
              <EsriLeafletLayer
                opacity={1}
                layerType="imageMapLayer"
                url="https://landsat.arcgis.com/arcgis/rest/services/Landsat/PS/ImageServer"
                attribution="United States Geological Survey (USGS), National Aeronautics and Space Administration (NASA)"
              />
            </LayersControl.BaseLayer>
          </LayersControl>
        </MapContainer> */}
      </section>
    </>
  )
}

export default Ontario