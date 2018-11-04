import React from 'react'
import { Link } from 'gatsby'

import { Button } from 'antd'

import Layout from '../components/layout'

const SecondPage = () => (
	<Layout>
		<section className="section">
			<div className="container">
				<h1>Hi from the about page</h1>
				<h2>Welcome to about page.</h2>
				<Button type="primary">
					<Link to="/">Go back to the homepage</Link>
				</Button>
			</div>
		</section>
	</Layout>
)

export default SecondPage
