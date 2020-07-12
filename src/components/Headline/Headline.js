import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Headline extends Component {
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

Headline.propTypes = {
	header: PropTypes.string,
	desc: PropTypes.string,
	tempArr: PropTypes.arrayOf(
		PropTypes.shape({
			fName: PropTypes.string,
			lName: PropTypes.string,
			email: PropTypes.string,
			age: PropTypes.number,
			onlineStatus: PropTypes.bool,
		})
	),
};
