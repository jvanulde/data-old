import React from "react"

const Downloads = props => {
  const { pageContext } = props
  const {
    pageContent,
    multiHazardThreat,
    physicalExposureB,
    physicalExposureS,
    riskDynamics,
    socialFabric,
  } = pageContext

  return (
    <div className="container">

        <div>
          {pageContent.map((data, index) => {
            return <h1 key={`content_title_${index}`}>{data.title}</h1>
          })}
        </div>
      {multiHazardThreat.map((item, index) => {
        return (
          <td>
            <div key={`link_${index}`}>
              <a
                class="btn btn-primary btn-sm pull-right"
                href={item.link}
                download
              >
                Multi Hazard Threat
              </a>
            </div>
          </td>
        )
      })}
      {physicalExposureB.map((item, index) => {
        return (
          <td>
            <div key={`link_${index}`}>
              <a
                className="btn btn-primary btn-sm pull-right"
                href={item.link}
                download
              >
                Physical Exposure B
              </a>
            </div>
          </td>
        )
      })}
      {physicalExposureS.map((item, index) => {
        return (
          <td>
            <div key={`link_${index}`}>
              <a
                className="btn btn-primary btn-sm pull-right"
                href={item.link}
                download
              >
                Physical Exposure S
              </a>
            </div>
          </td>
        )
      })}
      {riskDynamics.map((item, index) => {
        return (
          <td>
            <div key={`link_${index}`}>
              <a
                className="btn btn-primary btn-sm pull-right"
                href={item.link}
                download
              >
                Risk Dynamics
              </a>
            </div>
          </td>
        )
      })}
      {socialFabric.map((item, index) => {
        return (
          <td>
            <div key={`link_${index}`}>
              <a
                className="btn btn-primary btn-sm pull-right"
                href={item.link}
                download
              >
                Social Fabric
              </a>
            </div>
          </td>
        )
      })}
    </div>
  )
}

export default Downloads
