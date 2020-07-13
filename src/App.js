import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './redux/actions/index';

import './App.scss';

import Header from './components/Header/Header';
import Headline from './components/Headline/Headline';
import Button from './components/Button/Button';
import ListItem from './components/ListItem/ListItem';

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

function App({ fetchPosts, posts }) {
	const fetch = () => {
		fetchPosts();
	};

	const configButton = {
		buttonText: 'Get posts',
		emitEvent: fetch,
	};

	return (
		<div className='App' data-test='App'>
			<Header />
			<section className='main'>
				<Headline
					header='Posts'
					desc='Click the button to render posts'
					tempArr={tempArr}
				/>
				<Button {...configButton} />
				{posts.length > 0 && (
					<div>
						{posts.map((post) => (
							<ListItem key={post.id} title={post.title} desc={post.body} />
						))}
					</div>
				)}
			</section>
		</div>
	);
}

const mapStateToProps = (state) => ({
	posts: state.posts,
});

const mapDispatchToProps = {
	fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
