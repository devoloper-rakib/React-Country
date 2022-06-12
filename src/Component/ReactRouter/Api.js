import React from 'react';
import './ReactRouter.css';
export const Api = (props) => {
	const {
		strMeal,
		strMealThumb,
		strInstructions,
		strIngredient1,
		strIngredient2,
		strIngredient3,
		strIngredient4,
		strIngredient5,
		strIngredient6,
	} = props;

	return (
		<section className='api_main'>
			<img className='img' src={strMealThumb} alt={strMeal} />
			<h1>{strMeal}</h1>
		</section>
	);
};
