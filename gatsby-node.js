const fs = require("fs")
const yaml = require("js-yaml")


const path = require("path")

exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
  const config = {
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  }

  // when building HTML, window is not defined, so Leaflet causes the build to blow up
  if (stage === "build-html") {
    config.module = {
      rules: [
        {
          test: /mapbox-gl/,
          use: loaders.null(),
        },
      ],
    }
  }

  actions.setWebpackConfig(config)
}


exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const ymlDoc = yaml.safeLoad(
    fs.readFileSync("./content/data/yaml/downloads.yaml", "utf-8")
  )
  ymlDoc.forEach(element => {
    createPage({
      path: element.path,
      component: require.resolve("./src/templates/downloads.js"),
      context: {
        pageContent: element.content,
        multiHazardThreat: element.multiHazardThreat,
        physicalExposureB: element.physicalExposureB,
        physicalExposureS: element.physicalExposureS,
        riskDynamics: element.riskDynamics,
        socialFabric: element.socialFabric

      },
    })
  })
  const ymlDocER = yaml.safeLoad(
    fs.readFileSync("./content/data/yaml/economic-regions.yaml", "utf-8")
  )
  ymlDocER.forEach(element => {
    createPage({
      path: element.path,
      component: require.resolve("./src/templates/economicRegions.js"),
      context: {
        pageContent: element.content,
        aggregateData: element.aggregateData,
        downloadsPage: element.downloadsPage
      },
    })
  })


  const newsAndUpdatesTemplate = require.resolve(
    `./src/templates/newsAndUpdates.js`
  )
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: newsAndUpdatesTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug
      },
    })
  })
}
