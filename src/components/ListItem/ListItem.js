import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListItem extends Component {
	render() {
		const { title, desc } = this.props;

		if (!title) {
			return null;
		}

		return (
			<div data-test='ListItem'>
				<h2 data-test='ListItem__Title'>{title}</h2>
				<p data-test='ListItem__Desc'>{desc}</p>
			</div>
		);
	}
}

ListItem.propTypes = {
	title: PropTypes.string,
	desc: PropTypes.string,
};
