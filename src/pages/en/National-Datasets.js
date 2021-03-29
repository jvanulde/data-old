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
      {/* <ul>
          <li><Link to="/economic-regions/Camrose-Drumheller">Camrose Drumheller</Link></li>
          <li><Link to="/economic-regions/Red-Deer">Red Deer</Link></li>
          <li><Link to="/economic-regions/Calgary">Calgary</Link></li>
          <li><Link to="/economic-regions/Banff-Jasper-Rocky-Mountain-House">Banff Jasper Rocky Mountain House</Link></li>
          <li><Link to="/economic-regions/Lethbridge-Medicine-Hat">Lethbridge Medicine Hat</Link></li>
          <li><Link to="/economic-regions/Wood-Buffalo-Cold-Lake">Wood Buffalo Cold Lake</Link></li>
          <li><Link to="/economic-regions/Edmonton">Edmonton</Link></li>
          <li><Link to="/economic-regions/Athabasca-Grande-Prairie-Peace-River">Athabasca Grande Prairie Peace River</Link></li>
          </ul>
          <h2>British Columbia</h2>
          <ul>
          <li><Link to="/economic-regions/Vancouver-Island-and-Coast">Vancouver Island and Coast</Link></li>
          <li><Link to="/economic-regions/Lower-Mainland-Southwest">Lower Mainland Southwest </Link></li>
          <li><Link to="/economic-regions/Thompson-Okanagan">Thompson Okanagan</Link></li>
          <li><Link to="/economic-regions/Kootenay">Kootenay</Link></li>
          <li><Link to="/economic-regions/Cariboo">Cariboo</Link></li>
          <li><Link to="/economic-regions/North-Coast">North Coast</Link></li>
          <li><Link to="/economic-regions/Nechako">Nechako</Link></li>
          <li><Link to="/economic-regions/Northeast">Northeast</Link></li>
          </ul>
          <h2>Saskatchewan</h2>
          <ul>
          <li><Link to="/economic-regions/Regina-Moose-Mountain">Regina Moose Mountain</Link></li>
          <li><Link to="/economic-regions/Red-Deer-SK">Red Deer</Link></li>
          <li><Link to="/economic-regions/Swift-Current-Moose-Jaw">Swift Current Moose Jaw</Link></li>
          <li><Link to="/economic-regions/Saskatoon-Biggar">Saskatoon Biggar</Link></li>
          <li><Link to="/economic-regions/Yorkton-Melville">Yorkton Melville</Link></li>
          <li><Link to="/economic-regions/Prince-Albert">Prince Albert</Link></li>
          <li><Link to="/economic-regions/Northern">Northern</Link></li>
          </ul>
          <h2>Manitoba</h2>
          <ul>
          <li><Link to="/economic-regions/Southeast">Southeast</Link></li>
          <li><Link to="/economic-regions/South-Central">South Central </Link></li>
          <li><Link to="/economic-regions/Southwest">Southwest</Link></li>
          <li><Link to="/economic-regions/North-Central">North Central</Link></li>
          <li><Link to="/economic-regions/Winnipeg">Winnipeg</Link></li>
          <li><Link to="/economic-regions/Interlake">Interlake</Link></li>
          <li><Link to="/economic-regions/Parklands">Parklands</Link></li>
          <li><Link to="/economic-regions/North">North</Link></li>
          </ul>
          <h2>Ontario</h2>
          <ul>
          <li><Link to="/economic-regions/Ottawa">Ottawa</Link></li>
          <li><Link to="/economic-regions/Kingston-Pembroke">Kingston Pembroke</Link></li>
          <li><Link to="/economic-regions/Muskoka-Kawarthas">Muskoka Kawarthas</Link></li>
          <li><Link to="/economic-regions/Toronto">Toronto</Link></li>
          <li><Link to="/economic-regions/Kitchener-Waterloo-Barrie">Kitchener Waterloo Barrie</Link></li>
          <li><Link to="/economic-regions/Hamilton-Niagara-Peninsula">Hamilton Niagara Peninsula</Link></li>
          <li><Link to="/economic-regions/London">London</Link></li>
          <li><Link to="/economic-regions/Windsor-Sarnia">Windsor Sarnia</Link></li>
          <li><Link to="/economic-regions/Stratford-Bruce-Peninsula">Stratford Bruce Peninsula</Link></li>
          <li><Link to="/economic-regions/Northeast">Northeast</Link></li>
          <li><Link to="/economic-regions/Northwest">Northwest</Link></li>
          </ul>
          <h2>Quebec</h2>
          <ul>
          <li><Link to="/economic-regions/Gasp">Gasp</Link></li>
          <li><Link to="/economic-regions/Bas-Saint-Laurent">Bas-Saint-Laurent</Link></li>
          <li><Link to="/economic-regions/Capitale-Nationale">Capitale Nationale</Link></li>
          <li><Link to="/economic-regions/Chaudière-Appalaches">Chaudière-Appalaches</Link></li>
          <li><Link to="/economic-regions/Estrie">Estrie</Link></li>
          <li><Link to="/economic-regions/Center-du-Quebec">Center du Quebec</Link></li>
          <li><Link to="/economic-regions/Mont">Mont</Link></li>
          <li><Link to="/economic-regions/Montreal">Montreal</Link></li>
          <li><Link to="/economic-regions/Laval">Laval</Link></li>
          <li><Link to="/economic-regions/Lanaudi">Lanaudi</Link></li>
          <li><Link to="/economic-regions/Laurentides">Laurentides</Link></li>
          <li><Link to="/economic-regions/Outaouais">Outaouais</Link></li>
          <li><Link to="/economic-regions/Abitibi-Témiscamingue">Abitibi-Témiscamingue</Link></li>
          <li><Link to="/economic-regions/Mauricie">Mauricie</Link></li>
          <li><Link to="/economic-regions/Saguenay-Lac-Saint-Jean">Saguenay Lac Saint Jean</Link></li>
          <li><Link to="/economic-regions/Côte-Nord">Côte-Nord</Link></li>
          <li><Link to="/economic-regions/Nord-du-Quebec">Nord du Quebec</Link></li>
          </ul>
          <h2>New Brunswick</h2>
          <ul>
          <li><Link to="/economic-regions/Campbellton-Miramichi">Campbellton Miramichi</Link></li>
          <li><Link to="/economic-regions/Moncton-Richibucto">Moncton Richibucto</Link></li>
          <li><Link to="/economic-regions/Saint-John-St-Stephen">Saint John St. Stephen</Link></li>
          <li><Link to="/economic-regions/Fredericton-Oromocto">Fredericton Oromocto</Link></li>
          <li><Link to="/economic-regions/Edmundston-Woodstock">Edmundston Woodstock</Link></li>
          </ul>
          <h2>Prince Edward Island</h2>
          <ul>
          <li><Link to="/economic-regions/Prince-Edward-Island">Prince Edward Island</Link></li>
          </ul>
          <h2>Nova Scotia</h2>
          <ul>
          <li><Link to="/economic-regions/Cape-Breton">Cape Breton</Link></li>
          <li><Link to="/economic-regions/North-Shore">North Shore</Link></li>
          <li><Link to="/economic-regions/Annapolis-Valley">Annapolis Valley</Link></li>
          <li><Link to="/economic-regions/Southern">Southern</Link></li>
          <li><Link to="/economic-regions/Halifax">Halifax</Link></li>
          </ul>
          <h2>Newfoundland & Labrador</h2>
          <ul>
          <li><Link to="/economic-regions/Avalon-Peninsula">Avalon Peninsula</Link></li>
          <li><Link to="/economic-regions/South-Coast-Burin-Peninsula">South Coast Burin Peninsula</Link></li>
          <li><Link to="/economic-regions/West-Coast-Northern-Peninsula-Labrador">West Coast Northern Peninsula Labrador</Link></li>
          <li><Link to="/economic-regions/Notre-Dame-Central-Bonavista-Bay">Notre Dame Central Bonavista Bay</Link></li>
          </ul>
          <h2>Yukon</h2>
          <ul>
          <li><Link to="/economic-regions/Yukon">Yukon</Link></li>
          </ul>
          <h2>Northwest Territories</h2>
          <ul>
          <li><Link to="/economic-regions/Northwest-Territories">Northwest Territories</Link></li>
          </ul>
          <h2>Nunavut</h2>
          <ul>
          <li><Link to="/economic-regions/Nunavut">Nunavut</Link></li>
          </ul> */}
    </>
  )
}
export default NationalDatasetsPage
