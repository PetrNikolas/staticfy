import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Paragraph from '../components/Paragraph.re'

const AboutPage = () => (
	<Layout>
		<section className="section">
			<div className="container">
				<h1>Hi from the about page</h1>
				<h2>Welcome to about page.</h2>

				<Paragraph>
					<button className="btn btn-secondary">
						<Link to="/" style={{ backgroundImage: `none` }}>
							Go back to the homepage
						</Link>
					</button>
				</Paragraph>
			</div>
		</section>
	</Layout>
)

export default AboutPage
