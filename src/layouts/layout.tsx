import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

import Footer from '../components/Footer/Footer.re'
import Paragraph from '../components/Paragraph/Paragraph.re'

import '../styles/styles.scss'

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<>
				<Helmet
					title={data.site.siteMetadata.title}
					meta={[
						{ name: 'charset', content: 'utf-8' },
						{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
						{ name: 'description', content: 'Sample' },
						{ name: 'author', content: 'Petr Nikolas' },
						{ name: 'reply-to', content: 'hello@petrnikolas.com' },
						{ name: 'url', content: 'https://staticfy.netlify.com/' },
					]}
				>
					<html lang="en" />
					<link href="https://unpkg.com/spectre.css/dist/spectre.min.css" rel="stylesheet" />
					<link
						href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css"
						rel="stylesheet"
					/>
					<link
						href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css"
						rel="stylesheet"
					/>
				</Helmet>
				<Header siteTitle={data.site.siteMetadata.title} />
				<div
					style={{
						margin: '0 auto',
						maxWidth: 960,
						padding: '0px 1.0875rem 1.45rem',
						paddingTop: 0,
					}}
				>
					{children}
				</div>
				<Footer>
					<Paragraph>&copy; Staticfy</Paragraph>
				</Footer>
			</>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
