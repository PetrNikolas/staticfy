import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layouts/layout'
import Section from '../components/section/section'
import Paragraph from '../components/paragraph/paragraph'
import Button from '../components/button/button'
import Container from '../components/container/container'

const IndexPage = () => (
	<Layout>
		<Section>
			<Container>
				<h1>Hi people</h1>
				<h2>Welcome to your new Staticfy site.</h2>

				<Paragraph>
					<Button>
						<Link to="/about/" style={{ backgroundImage: `none` }}>
							Go to about page
						</Link>
					</Button>
					<Button>
						<Link to="/404/" style={{ backgroundImage: `none` }}>
							Go to 404 page
						</Link>
					</Button>
				</Paragraph>
			</Container>
		</Section>
	</Layout>
)

export default IndexPage
