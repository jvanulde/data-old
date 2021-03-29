import React from "react"
// import MapOfCanada from "../../svg/map-of-canada.svg"
import { Link } from 'gatsby'
import '../../components/SVGMapComponent/mapstyles.css'
import Map from '../../components/MapOfCanada/map'
import * as d3 from "d3"
const ProvincesAndTerritories = () => {

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
      d3.json("/MapData.json").then((d) => {
        setData(d);
        setLoading(false);
      });
      return () => undefined;
    }, []);


  return (
    <>
      <div className="container">
      <div><Link to="/">Home</Link> / Provinces and Territories</div>
        <h1 id="wb-cont">Province And Territory Datasets</h1>
      </div>
      <section>
        <div className="container">
         
          {loading && <div>loading</div>}
        {!loading && <Map data={data}/>}
          
        </div>
        {/* <Map/> */}
      </section>
      <section>
        <div className="container">
          <hr />
          <h1>Provinces and Territories</h1>
          <ul className="list-group">
              <li className="list-group-item"><Link to="/en/Alberta">Alberta</Link></li>
              <li className="list-group-item"><Link to="/en/British-Columbia">British Columbia</Link></li>
              <li className="list-group-item"><Link to="/en/Saskatchewan">Saskatchewan</Link></li>
              <li className="list-group-item"><Link to="/en/Manitoba">Manitoba</Link></li>
              <li className="list-group-item"><Link to="/en/New-Brunswick">New Brunswick</Link></li>
              <li className="list-group-item"><Link to="/en/Newfoundland-and-Labrador">Newfoundland and Labrador</Link></li>
              <li className="list-group-item"><Link to="/en/Nova-Scotia">Nova Scotia</Link></li>
              <li className="list-group-item"><Link to="/en/Northwest-Territories">Northwest Territories</Link></li>
              <li className="list-group-item"><Link to="/en/Nunavut">Nunavut</Link></li>
              <li className="list-group-item"><Link to="/en/Ontario">Ontario</Link></li>
              <li className="list-group-item"><Link to="/en/Prince-Edward-Island">Prince Edward Island</Link></li>
              <li className="list-group-item"><Link to="/en/Quebec">Quebec</Link></li>
              <li className="list-group-item"><Link to="/en/Yukon">Yukon</Link></li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default ProvincesAndTerritories
