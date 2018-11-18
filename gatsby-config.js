module.exports = {
  siteMetadata: {
    title: 'Staticfy',
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#24EAA9',
        theme_color: '#24EAA9',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.example.com`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/some-other-sitemap.xml`,
        exclude: [],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
    {
    resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'YOUR_SENTRY_DSN_URL',
        config: {
          environment: 'staging'
        }
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-offline',
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`
  ],
}
