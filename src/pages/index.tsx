import React from 'react'
import { Link } from 'gatsby'

import { Button } from 'antd'

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
				<Button type="primary">
					<Link to="/about/">Go to page 2</Link>
				</Button>
			</div>
		</section>
	</Layout>
)

export default IndexPage
