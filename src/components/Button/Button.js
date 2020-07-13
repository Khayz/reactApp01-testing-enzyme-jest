import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
	submitEvent = () => {
		if (this.props.emitEvent) {
			this.props.emitEvent();
		}
	};

	render() {
		const { buttonText } = this.props;

		return (
			<button onClick={() => this.submitEvent()} data-test='Button'>
				{buttonText}
			</button>
		);
	}
}

Button.propTypes = {
	buttonText: PropTypes.string,
	emitEvent: PropTypes.func,
};
