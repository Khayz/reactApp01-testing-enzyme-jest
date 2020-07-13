import React, { Component } from 'react';
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

class App extends Component {
	state = {
		hideBtn: false,
	};

	exampleMethod_updatesState = () => {
		const { hideBtn } = this.state;
		this.setState({
			hideBtn: !hideBtn,
		});
	};

	exampleMethod_returnsAValue = (number) => {
		return number + 1;
	};

	fetch = () => {
		this.props.fetchPosts();
		this.exampleMethod_updatesState();
	};

	render() {
		const { posts } = this.props;
		const { hideBtn } = this.state;

		const configButton = {
			buttonText: 'Get posts',
			emitEvent: this.fetch,
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
					{!hideBtn && <Button {...configButton} />}
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
}

const mapStateToProps = (state) => ({
	posts: state.posts,
});

const mapDispatchToProps = {
	fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
