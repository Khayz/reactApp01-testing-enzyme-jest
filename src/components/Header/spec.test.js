import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils/index';

import Header from './Header';

const setUp = (props = {}) => {
	const component = shallow(<Header {...props} />);
	return component;
};

describe('Header Component', () => {
	let component;
	beforeEach(() => {
		component = setUp();
	});

	it('Should render without errors', () => {
		const wrapper = findByTestAttr(component, 'Header');
		expect(wrapper.length).toBe(1);
	});

	it('Should render a logo', () => {
		const logo = findByTestAttr(component, 'Header__logo__img');
		expect(logo.length).toBe(1);
	});
});
