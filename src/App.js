import React from 'react';

import './App.scss';

import Header from './components/Header/Header';
import Headline from './components/Headline/Headline';

const tempArr = [
	{
		fName: 'Joe',
		lName: 'Bloggs',
		email: 'joeblog@gmail.com',
		age: 24,
		onlineStatus: true,
	},
	{
		fName: 'Joe',
		lName: 'Bloggs',
		email: 'joeblog@gmail.com',
		age: 24,
		onlineStatus: true,
	},
];

function App() {
	return (
		<div className='App'>
			<Header />
			<section className='main'>
				<Headline
					header='Posts'
					desc='Click the button to render posts'
					tempArr={tempArr}
				/>
			</section>
		</div>
	);
}

export default App;
