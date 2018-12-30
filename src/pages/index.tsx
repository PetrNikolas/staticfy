import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layouts/layout'

import Paragraph from '../components/Paragraph/Paragraph.re'
import Button from '../components/Button/Button.re'
import Section from '../components/Section/Section.re'
import Container from '../components/Container/Container.re'

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
				</Paragraph>
			</Container>
		</Section>
	</Layout>
)

export default IndexPage
