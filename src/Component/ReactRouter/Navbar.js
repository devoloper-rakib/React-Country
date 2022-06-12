import React, { useState } from 'react';
import './ReactRouter.css';
const Navbar = (props) => {
	const [meal, setMeal] = useState([]);
	const [search, setSearch] = useState('');

	const handleChange = (event) => {
		console.log(event.target.value);

		setSearch(event.target.value);
	};

	return (
		<div>
			<div className='main_navbar'>
				<div className='left_navbar'>
					<h1>Meal DB !</h1>
				</div>
				<div className='Middle_navbar'>
					<ul className='nav'>
						<li>
							<a href='#'>Home</a>
						</li>
						<li>
							<a href='#'>Food</a>
						</li>
						<li>
							<a href='#'>About</a>
						</li>
						<li>
							<a href='#'>Contact Us</a>
						</li>
					</ul>
				</div>
				<div className='right_navbar'>
					<input
						type='text'
						placeholder='Enter Your Food ...'
						value={meal}
						onChange={handleChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
