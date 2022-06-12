import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Api } from './Api';
import Navbar from './Navbar';
import './ReactRouter.css';
// const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=beef';

const Axios = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [meal, setMeal] = useState([]);
	const [search, setSearch] = useState('');

	const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				setMeal(res.data.meals);
				setIsLoading(false);
				setError(null);
				console.log(meal);
			})
			.catch((error) => {
				setIsLoading(false);
				setError(error.message);
			});
	}, [search]);

	return (
		<div>
			<Navbar setSearch={setSearch} />
			<div className='loading_side'>
				{isLoading && <h1 className='loading'>loading ...</h1>}

				{error && <h1 className='loading'>{error.message}</h1>}

				{meal === null ? (
					<h2 style={{ color: 'red', fontSize: '4rem', margin: '100px auto' }}>
						food not found
					</h2>
				) : (
					meal &&
					meal.map((item) => {
						return <Api key={item.idMeal} {...item} />;
					})
				)}
			</div>
		</div>
	);
};

export default Axios;
