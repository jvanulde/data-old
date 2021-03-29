import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import Accordion from '../components/Accordion'

const IndicatorLayerPage = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div className="container">
        {modal ? (
          <Link to={closeTo}>
            Close
          </Link>
        ) : (
          <header>
            <h1>
              OpenDRR
            </h1>
          </header>
        )}
        <div>
        <Link to="/">Go back to the homepage</Link>
        </div>
        <h1>Risk Profile Indicators</h1>

        <Accordion />
      </div>
    )}
  </ModalRoutingContext.Consumer>
)

export default IndicatorLayerPage