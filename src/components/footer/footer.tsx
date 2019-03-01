import React from 'react'

const Footer = ({ children }) => (
	<footer className="footer">
		<div className="container">
			<div className="columns">
				<div className="column col-12 col-xs-12 text-center">{children}</div>
			</div>
		</div>
	</footer>
)

export default Footer
