import React from "react"
// import MapOfCanada from "../../svg/map-of-canada.svg"
import { Link } from 'gatsby'
import '../../components/SVGMapComponent/mapstyles.css'
import Map from '../../components/MapOfCanada/map'
import * as d3 from "d3"
const ProvincesEtTerritoires = () => {

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
      <div><Link to="/">Accueil</Link> / Provinces et Territoires</div>
        <h1 id="wb-cont">Provinces et Territoires</h1>
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
          <ul className="list-group">
              <li className="list-group-item"><Link to="/fr/Alberta">Alberta</Link></li>
              <li className="list-group-item"><Link to="/fr/Colombie-Britannique">Colombie Britannique</Link></li>
              <li className="list-group-item"><Link to="/fr/Saskatchewan">Saskatchewan</Link></li>
              <li className="list-group-item"><Link to="/fr/Manitoba">Manitoba</Link></li>
              <li className="list-group-item"><Link to="/fr/Nouveau-Brunswick">Nouveau Brunswick</Link></li>
              <li className="list-group-item"><Link to="/fr/Terre-Neuve-et-Labrador">Terre Neuve et Labrador</Link></li>
              <li className="list-group-item"><Link to="/fr/Nouvelle-Écosse">Nouvelle Écosse</Link></li>
              <li className="list-group-item"><Link to="/fr/Territoires-du-Nord-Ouest">Territoires du Nord Ouest</Link></li>
              <li className="list-group-item"><Link to="/fr/Nunavut">Nunavut</Link></li>
              <li className="list-group-item"><Link to="/fr/Ontario">Ontario</Link></li>
              <li className="list-group-item"><Link to="/fr/Île-du-Prince-Édouard">Île du Prince Édouard</Link></li>
              <li className="list-group-item"><Link to="/fr/Québec">Québec</Link></li>
              <li className="list-group-item"><Link to="/fr/Yukon">Yukon</Link></li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default ProvincesEtTerritoires
