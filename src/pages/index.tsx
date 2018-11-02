import React from 'react'
import { Link } from 'gatsby'

import { Button } from 'antd'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
	<Layout>
		<section className="hero is-fullheight">
			<div className="hero-body">
				<div className="container">
					<h1 className="title">Hi people</h1>
					<h2 className="subtitle">Welcome to your new Staticfy site.</h2>
					<div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
						<Image />
					</div>
					<Button type="primary">
						<Link to="/page-2/">Go to page 2</Link>
					</Button>
				</div>
			</div>
		</section>
	</Layout>
)

export default IndexPage
