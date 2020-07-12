import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils/index';

import Headline from './Headline';

const setUp = (props = {}) => {
	const component = shallow(<Headline {...props} />);
	return component;
};

describe('Headline Component', () => {
	describe('With Props', () => {
		let wrapper;
		beforeEach(() => {
			const props = { header: 'Test Header', desc: 'testing description' };
			wrapper = setUp(props);
		});
		it('Should render without errors', () => {
			const component = findByTestAttr(wrapper, 'Headline');
			expect(component.length).toBe(1);
		});

		it('Should render a h1', () => {
			const h1 = findByTestAttr(wrapper, 'Headline__Header');
			expect(h1.length).toBe(1);
		});

		it('Should render a desc', () => {
			const desc = findByTestAttr(wrapper, 'Headline__Desc');
			expect(desc.length).toBe(1);
		});
	});

	describe('Without Props', () => {
		let wrapper;
		beforeEach(() => {
			wrapper = setUp();
		});

		it('Should not render', () => {
			const component = findByTestAttr(wrapper, 'Headline');
			expect(component.length).toBe(0);
		});
	});
});
