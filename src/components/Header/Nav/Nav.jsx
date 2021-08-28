import React from 'react'

import './Nav.scss'

const Nav = () => (
	<nav className="nav">
		<ul className="nav__list">
			<li>
				<a href="">
					All
				</a>
			</li>
			<li>
				<a href="">
					Active
				</a>
			</li>
			<li>
				<a href="">
					Completed
				</a>
			</li>
		</ul>
	</nav>
)

export default Nav