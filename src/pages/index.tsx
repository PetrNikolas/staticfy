import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
	<Layout>
		<section className="section">
			<div className="container">
				<h1>Hi people</h1>
				<h2>Welcome to your new Staticfy site.</h2>
				<div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
					<Image />
				</div>
				<button className="btn btn-secondary">
					<Link to="/about/" style={{ backgroundImage: `none` }}>
						Go to about page
					</Link>
				</button>
			</div>
		</section>
	</Layout>
)

export default IndexPage
