import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layouts/layout'
import Section from '../components/section/section'
import Paragraph from '../components/paragraph/paragraph'
import Button from '../components/button/button'
import Container from '../components/container/container'

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
