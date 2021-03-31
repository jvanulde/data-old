import React from "react"
import { Link } from "gatsby"
const DownloadsPage = () => {
  return (
    <>
    <div className="container downloads-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link><span> / Downloads </span>
      </div>
      <div className="col-md-8">
      <h1>OpenDrr Downloads</h1>
      <p>
        Welcome to the OpenDRR data download site. Here you will find the latest
        versions of all datasets. These datasets are available for download by
        Province/Territory and by Economic Region. Currently only GeoPackage
        (.gpkg) format is provided.
      </p>
      <div >
        <h1>Browse by Province</h1>
        <ul>
         <h2>Western Canada</h2>
          <li className="prov-anchor"><a href="#Alberta">Alberta</a></li>
          <li className="prov-anchor"><a href="#BC">British Columbia</a></li>
          <li className="prov-anchor"><a href="#Saskatchewan">Saskatchewan</a></li>
          <li className="prov-anchor"><a href="#Manitoba">Manitoba</a></li>
        </ul>

        <ul>
          <h2>Eastern Canada</h2>
          <li className="prov-anchor"><a href="#Ontario">Ontario</a></li>
          <li className="prov-anchor"><a href="#Quebec">Quebec</a></li>
          <li className="prov-anchor"><a href="#NewBrunswick">New Brunswick</a></li>
          <li className="prov-anchor"><a href="#PEI">Prince Edward Island</a></li>
          <li className="prov-anchor"><a href="#NovaScotia">Nova Scotia</a></li>
          <li className="prov-anchor"><a href="#Newfoundland">Newfoundland & Labrador</a></li>
        </ul>

        <ul>
         <h2>Northern Canada</h2>
          <li className="prov-anchor"><a href="#Yukon">Yukon</a></li>
          <li className="prov-anchor"><a href="#NorthwestTerritories">Northwest Territories</a></li>
          <li className="prov-anchor"><a href="#Nunavut">Nunavut</a></li>
        </ul>
      </div>
      </div>
    </div>

    <section className="Province table-responsive" id="Alberta">
      <div className="container">
        <h2>Alberta</h2>
        <tr className="">
          <th>-</th>
          <th>Date Modified</th>
          <th>Format</th>
        </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <h3>Economic Regions</h3>
          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>



          <tr>
          <th>Camrose Drumheller (4820)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>



          <tr>
          <th>Calgary (4830)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>



          <tr>
          <th>Banff Jasper Rocky Mountain House (4840)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>



          <tr>
          <th>Red Deer (4850)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>


          <tr>
          <th>Edmonton (4860)	</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>


          <tr>
          <th>Athabasca Grande Prairie Peace River (4870)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>


          <tr>
          <th>Wood Buffalo Cold Lake (4880)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
    

        </div>
      </section>

      
      <section className="Province" id="BC">
      <div className="container">
        <h2>British Columbia</h2>
        <tr>
          <th>-</th>
          <th>Date Modified</th>
          <th>Format</th>
        </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <h3>Economic Regions</h3>
          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
      </div>
      </section>

      <section className="Province" id="Saskatchewan">
      <div className="container">
        <h2>Saskatchewan</h2>
        <tr>
          <th>-</th>
          <th>Date Modified</th>
          <th>Format</th>
        </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <h3>Economic Regions</h3>
          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

      </div>
      </section>


      <section className="Province" id="Manitoba">
      <div className="container">
        <h2>Manitoba</h2>
        <tr>
          <th>-</th>
          <th>Date Modified</th>
          <th>Format</th>
        </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <h3>Economic Regions</h3>
          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

      </div>
      </section>


      <section className="Province" id="Ontario">
      <div className="container">
      <h2>Ontario</h2>
        <tr>
          <th>-</th>
          <th>Date Modified</th>
          <th>Format</th>
        </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <h3>Economic Regions</h3>
          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

      </div>
      </section>


      <section className="Province" id="Quebec">
      <div className="container">
        <h2>Quebec</h2>
        <tr>
          <th>-</th>
          <th>Date Modified</th>
          <th>Format</th>
        </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <h3>Economic Regions</h3>
          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

      </div>
      </section>


      <section className="Province" id="NewBrunswick">
      <div className="container">
        <h2>New Brunswick</h2>
        <tr>
          <th>-</th>
          <th>Date Modified</th>
          <th>Format</th>
        </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <h3>Economic Regions</h3>
          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

      </div>
      </section>


      <section className="Province" id="PEI">
      <div className="container">
        <h2>Prince Edward Island</h2>
        <tr>
          <th>-</th>
          <th>Date Modified</th>
          <th>Format</th>
        </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <h3>Economic Regions</h3>
          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

      </div>
      </section>


      <section className="Province" id="NovaScotia">
      <div className="container">
        <h2>Nova Scotia</h2>
        <tr>
          <th>-</th>
          <th>Date Modified</th>
          <th>Format</th>
        </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <h3>Economic Regions</h3>
          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

      </div>
      </section>


      <section className="Province" id="Newfoundland">
      <div className="container">
        <h2>Newfoundland & Labrador</h2>
        <tr>
          <th>-</th>
          <th>Date Modified</th>
          <th>Format</th>
        </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <h3>Economic Regions</h3>
          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

      </div>
      </section>


      <section className="Province" id="Yukon">
      <div className="container">
        <h2>Yukon</h2>
        <tr>
          <th>-</th>
          <th>Date Modified</th>
          <th>Format</th>
        </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <h3>Economic Regions</h3>
          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

      </div>
      </section>


      <section className="Province" id="NorthwestTerritories">
      <div className="container">
        <h2>Northwest Territories</h2>
        <tr>
          <th>-</th>
          <th>Date Modified</th>
          <th>Format</th>
        </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <h3>Economic Regions</h3>
          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

      </div>
      </section>


      <section className="Province" id="Nunavut">
      <div className="container">
        <h2>Nunavut</h2>
        <tr>
          <th>-</th>
          <th>Date Modified</th>
          <th>Format</th>
        </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <h3>Economic Regions</h3>
          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

          <tr>
          <th>Lethbridge Medicine Hat (4810)</th>
          <th>Date Modified</th>
          <th>Format</th>
          </tr>
          <tr>
            <td>Multi Hazard Threat (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Buildings)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Physical Exposure (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Risk Dynamics	</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>
          <tr>
            <td>Social Fabric (Census Subdivision)</td>
            <td>Mon, Jan 25, 21</td>
            <td><span className="label label-default">.gpkg </span><button className="btn btn-default btn-sm map-link pull-right">download</button></td>
          </tr>

      </div>
      </section>



    </>
  )
}

export default DownloadsPage
