import React from 'react'
import { Link } from 'gatsby'

import { Button } from 'antd'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
	<Layout>
		<h1>Hi people</h1>
		<p>Welcome to your new Staticfy site.</p>
		<p>Now go build something great.</p>
		<div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
			<Image />
		</div>
		<Button type="primary">
			<Link to="/page-2/">Go to page 2</Link>
		</Button>
	</Layout>
)

export default IndexPage
