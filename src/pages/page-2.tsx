import React from 'react'
import { Link } from 'gatsby'

import { Button } from 'antd'

import Layout from '../components/layout'

const SecondPage = () => (
	<Layout>
		<section className="hero is-fullheight">
			<div className="hero-body">
				<div className="container">
					<h1 className="title">Hi from the second page</h1>
					<h2 className="subtitle">Welcome to page 2.</h2>
					<Button type="primary">
						<Link to="/">Go back to the homepage</Link>
					</Button>
				</div>
			</div>
		</section>
	</Layout>
)

export default SecondPage
