import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MarvelApp from './MarvelApp';
import Character from './Character';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<MarvelApp />} />
					<Route path="/Character/:id" element={<Character />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
