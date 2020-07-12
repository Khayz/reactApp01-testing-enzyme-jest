import React from 'react';

import './App.scss';

import Header from './components/Header/Header';
import Headline from './components/Headline/Headline';

function App() {
	return (
		<div className='App'>
			<Header />
			<section className='main'>
				<Headline header='Posts' desc='Click the button to render posts' />
			</section>
		</div>
	);
}

export default App;
