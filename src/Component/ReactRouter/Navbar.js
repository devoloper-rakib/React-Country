import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from './Axios';
import './ReactRouter.css';
const Navbar = ({ setSearch }) => {
	const handleChange = (event) => {
		console.log(event.target.value);

		setSearch(event.target.value);
	};

	return (
		<div>
			<div className='main_navbar'>
				<div className='left_navbar'>
					<h1>
						<NavLink
							to='/food'
							className={({ isActive }) => (isActive ? 'active' : null)}
							element={<Axios />}
						>
							Meal DB !
						</NavLink>
					</h1>
				</div>
				<div className='Middle_navbar'>
					<ul className='nav'>
						<li>
							<NavLink
								to='/home'
								className={(navInfo) => (navInfo.isActive ? 'active' : null)}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/food'
								className={({ isActive }) => (isActive ? 'active' : undefined)}
							>
								Food
							</NavLink>
						</li>
						<li>
							<NavLink
								className={(nav) => (nav.isActive ? 'active' : '')}
								to='/about'
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'active' : null)}
								to='/contact'
							>
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
				<div className='right_navbar'>
					<input
						type='text'
						placeholder='Enter Your Food ...'
						onChange={handleChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
