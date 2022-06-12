import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Axios from './Axios';
import Contact from './Contact';
import { Home } from './Home';
import { SingleLIst } from './SingleLIst';
const RouteMain = () => {
	return (
		<section>
			<div className='mainRoute'>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Axios />} />
						<Route path='/home' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/food/' element={<Axios />} />
						<Route path='/food/:foodId' element={<SingleLIst />} />
					</Routes>
				</BrowserRouter>
			</div>
		</section>
	);
};

export default RouteMain;
