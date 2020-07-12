import React, { Component } from 'react';

export default class Headline extends Component {
	state = {};

	render() {
		const { header, desc } = this.props;

		if (!header) {
			return null;
		}

		return (
			<div data-test='Headline'>
				<h1 data-test='Headline__Header'>{header}</h1>
				<p data-test='Headline__Desc'>{desc}</p>
			</div>
		);
	}
}
