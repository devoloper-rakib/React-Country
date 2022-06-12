import React from 'react';
import { NavLink } from 'react-router-dom';
import './ReactRouter.css';
import { SingleLIst } from './SingleLIst';
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
		idMeal,
	} = props;

	return (
		<section className='api_main'>
			<img className='img' src={strMealThumb} alt={strMeal} />
			<h1>
				<NavLink to={idMeal} element={<SingleLIst />}>
					{strMeal}
				</NavLink>
			</h1>
		</section>
	);
};
