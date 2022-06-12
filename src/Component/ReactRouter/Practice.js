import React, { useState, useEffect } from 'react';
import { Api } from './Api';
import './ReactRouter.css';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';
const Fetch = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [fetch, setFetch] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error('there is problem');
				} else {
					return response.json();
				}
			})
			.then((data) => {
				setFetch(data);
				setIsLoading(true);
				setError(null);
			})
			.catch((error) => {
				setIsLoading(false);
				setError(error.message);
			});
	}, []);
	return (
		<div>
			<h1>Fetching Data</h1>
			{isLoading && <h1>loading ...</h1>}

			{error && <h1>{error.message}</h1>}

			<div className='mainDiv'>{fetch && <Api fetch={fetch} />}</div>
		</div>
	);
};

export default Fetch;
