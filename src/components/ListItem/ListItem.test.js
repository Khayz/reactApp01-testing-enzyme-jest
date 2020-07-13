import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../../../utils/index';
import ListItem from './ListItem';

describe('ListItem Component', () => {
	describe('Checking PropTypes', () => {
		it("Shouldn't throw a warning", () => {
			const expectedProps = {
				title: 'Test Title',
				desc: 'Test Description',
			};

			const propsErr = checkProps(ListItem, expectedProps);
			expect(propsErr).toBeUndefined();
		});
	});

	describe('Renders', () => {
		let wrapper;
		beforeEach(() => {
			const props = {
				title: 'Test Title',
				desc: 'Test Description',
			};
			wrapper = shallow(<ListItem {...props} />);
		});

		it('Should render without errors', () => {
			const component = findByTestAttr(wrapper, 'ListItem');
			expect(component.length).toBe(1);
		});

		it('Should render a title', () => {
			const title = findByTestAttr(wrapper, 'ListItem__Title');
			expect(title.length).toBe(1);
		});

		it('Should render a description', () => {
			const description = findByTestAttr(wrapper, 'ListItem__Desc');
			expect(description.length).toBe(1);
		});
	});

	describe("Shouldn't render", () => {
		let wrapper;
		beforeEach(() => {
			const props = {
				desc: 'Test Descripti on',
			};
			wrapper = shallow(<ListItem {...props} />);
		});

		it('Component is not rendered', () => {
			const component = findByTestAttr(wrapper, 'ListItem');
			expect(component.length).toBe(0);
		});
	});
});
