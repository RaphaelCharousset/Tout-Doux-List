import React from 'react'

import { NavLink } from 'react-router-dom'

import './Nav.scss'

// add style on active navlink

const Nav = () => (
	<nav className="nav">
		<ul className="nav__list">
			<li>
				<NavLink to='/'>
					All
				</NavLink>
			</li>
			<li>
				<NavLink to='/active'>
					Active
				</NavLink>
			</li>
			<li>
				<NavLink to='completed'>
					Completed
				</NavLink>
			</li>
		</ul>
	</nav>
)

export default Nav