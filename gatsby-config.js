const siteUrl = 'https://example.com/';

module.exports = {
  siteMetadata: {
    siteUrl,
    title: 'Staticfy',
    description: 'Basic starter kit for static sites based on Gatsby.js',
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
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-import')(), // Add support for sass-like '@import'
          require('postcss-extend')(), // Add support for sass-like '@extend'
          require('postcss-nesting')(), // Add support for sass-like nesting of rules
          require('postcss-pxtorem')({
            mediaQuery: false, // Ignore media queries
            minPixelValue: 0, // Minimal pixel value that will be processed
            propList: [], // List of CSS properties that can be changed from px to rem; empty array means that all CSS properties can change from px to rem
            replace: true, // Replace pixels with rems
            rootValue: 16, // Root font-size
            selectorBlackList: ['html'], // Ignore pixels used for html
            unitPrecision: 4 // Round rem units to 4 digits
          }),
          require('postcss-preset-env')({stage: 3}),
          require('cssnano')()
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'staticfy',
        short_name: 'staticfy',
        description: 'Basic starter kit for static sites based on Gatsby.js',
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
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', disallow: '' }],
      },
    },
    // {
    //  resolve: `gatsby-plugin-google-analytics`,
    //  options: {
    //    trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
    //    head: false,
    //    anonymize: true,
    //    respectDNT: true,
    //    exclude: ["/preview/**", "/do-not-track/me/too/"],
    //    optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
    //    sampleRate: 5,
    //    siteSpeedSampleRate: 10,
    //    cookieDomain: "example.com",
    //  },
    // },
    // {
    // resolve: 'gatsby-plugin-sentry',
    //  options: {
    //    dsn: 'YOUR_SENTRY_DSN_URL',
    //    config: {
    //      environment: 'staging'
    //    }
    //  },
    // },
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
