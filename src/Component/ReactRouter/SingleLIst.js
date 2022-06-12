import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import './ReactRouter.css';
export const SingleLIst = () => {
	const { foodId } = useParams();
	const [singleMeal, setSingleMeal] = useState([]);

	axios
		.get(
			`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}
	`,
		)
		.then((res) => setSingleMeal(res.data.meals[0]))
		.catch((error) => alert(error.message));

	const {
		strArea,
		strCategory,
		strIngredient1,
		strInstructions,
		strMeal,
		strMealThumb,
		strIngredient2,
		strIngredient3,
		strIngredient4,
		strIngredient5,
		strIngredient6,
		strIngredient7,
		strIngredient8,
	} = singleMeal;

	return (
		<article>
			<div className='singleMeal'>
				<Navbar />

				<div className='single'>
					<img src={strMealThumb} alt={strMeal} />
					<h1>Food Name : {strMeal} </h1>
					<h2>Food Country : {strArea}</h2>
					<h3>Food Category : {strCategory}</h3>
					<ul>
						<li>Ingredient 1 :{strIngredient1} </li>
						<li>Ingredient 2 :{strIngredient2} </li>
						<li>Ingredient 3 :{strIngredient3} </li>
						<li>Ingredient 4 :{strIngredient4} </li>
						<li>Ingredient 5 :{strIngredient5} </li>
						<li>Ingredient 6 :{strIngredient6} </li>
						<li>Ingredient 7 :{strIngredient7} </li>
						<li>Ingredient 8 :{strIngredient8} </li>
					</ul>

					<h2>There Are some short Instruction for coking the dish </h2>
					<p>{strInstructions}</p>
				</div>
			</div>
		</article>
	);
};
