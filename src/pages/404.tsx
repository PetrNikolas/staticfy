import React from 'react'

import Layout from '../components/layout'
import Paragraph from '../components/Paragraph.re'

const NotFoundPage = () => (
	<Layout>
		<h1>NOT FOUND</h1>

		<Paragraph>You just hit a route that doesn&#39;t exist... the sadness.</Paragraph>
	</Layout>
)

export default NotFoundPage
