import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
	<Layout>
		<section className="section">
			<div className="container">
				<h1>Hi from the about page</h1>
				<h2>Welcome to about page.</h2>
				<button className="btn btn-secondary">
					<Link to="/">Go back to the homepage</Link>
				</button>
			</div>
		</section>
	</Layout>
)

export default SecondPage
