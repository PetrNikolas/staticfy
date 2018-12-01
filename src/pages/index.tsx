import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

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

				<div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
					<Image />
				</div>

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
