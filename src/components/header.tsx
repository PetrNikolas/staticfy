import React from 'react'
import { Link } from 'gatsby'

const ListLink = props => (
	<li style={{ display: `inline-block`, marginRight: `1rem` }}>
		<Link to={props.to} style={{ backgroundImage: `none` }}>
			{props.children}
		</Link>
	</li>
)

const Header = ({ siteTitle }) => (
	<div
		style={{
			background: '#ffffff',
			marginBottom: '1.45rem',
		}}
	>
		<div
			style={{
				margin: '0 auto',
				maxWidth: 960,
				padding: '1.45rem 1.0875rem',
			}}
		>
			<header style={{ marginBottom: `1.5rem` }}>
				<Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
					<h1 style={{ display: `inline` }}>{siteTitle}</h1>
				</Link>

				<ul style={{ listStyle: `none`, float: `right` }}>
					<ListLink to="/">Home</ListLink>
					<ListLink to="/about/">About</ListLink>
				</ul>
			</header>
		</div>
	</div>
)

export default Header
