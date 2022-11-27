import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { french, english } from './utils/text' 
import Home from './pages/Home';

const App = () => {

	const [text, setText] = useState(french)

	const changeLanguage = (e) => {
		setText((e.target.checked === true) ? english : french)
	}

	return (
		<Routes>
			<Route path="*" element={<Home text={text} changeLanguage={changeLanguage} />} />
		</Routes>
	);
	
}

export default App;