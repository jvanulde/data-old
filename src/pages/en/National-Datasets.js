import React from "react"
import { Link } from "gatsby"
const NationalDatasetsPage = () => {
  return (
    <>
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span> / National Datasets </span>
        </div>
        <h1 id="wb-cont">National Datasets</h1>
        <section style={{marginTop: '20vh', marginBottom: '20vh'}} id="NHSL">
          <h2>National Human Settlement Layers</h2>
          <hr />
          <table className="table table-hover">
            <thead>
              <th>Name</th>
              <th>Last Updated</th>
              <th>Format</th>
            </thead>
            <tbody>

            </tbody>
          </table>
        </section>
        <section style={{marginTop: '20vh', marginBottom: '20vh'}} id="SR">
        <h2>Seismic Risk</h2>
        <hr />
        <table className="table table-hover">
            <thead>
              <th>Name</th>
              <th>Last Updated</th>
              <th>Format</th>
            </thead>
            <tbody>
              
            </tbody>
          </table>
        <p>Coming Soon</p>
        </section>
        <section style={{marginTop: '20vh', marginBottom: '20vh'}} id="ES">
        <h2>Earthquake Scenarios</h2>
        <hr />
        <table className="table table-hover">
            <thead>
              <th>Name</th>
              <th>Last Updated</th>
              <th>Format</th>
            </thead>
            <tbody>
              
            </tbody>
          </table>
        <p>Coming Soon</p>
        </section>
      </div>
    </>
  )
}
export default NationalDatasetsPage
