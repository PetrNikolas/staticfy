import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layouts/layout'

import Paragraph from '../components/Paragraph/Paragraph.re'
import Button from '../components/Button/Button.re'
import Section from '../components/Section/Section.re'
import Container from '../components/Container/Container.re'

const AboutPage = () => (
	<Layout>
		<Section>
			<Container>
				<h1>Hi from the about page</h1>
				<h2>Welcome to about page.</h2>

				<Paragraph>
					<Button>
						<Link to="/" style={{ backgroundImage: `none` }}>
							Go back to the homepage
						</Link>
					</Button>
				</Paragraph>
			</Container>
		</Section>
	</Layout>
)

export default AboutPage
