import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../utils/index';
import Button from './Button';

describe('Button Component', () => {
	describe('Checking PropTypes', () => {
		it("Shouldn't throw a warning", () => {
			const expectedProps = {
				buttonText: 'Example Button Text',
				emitEvent: () => {},
			};
			const propsErr = checkProps(Button, expectedProps);
			expect(propsErr).toBeUndefined();
		});
	});

	describe('Renders', () => {
		let wrapper;
		let mockFunc;
		beforeEach(() => {
			mockFunc = jest.fn();

			const props = {
				buttonText: 'Example Button Text',
				emitEvent: mockFunc,
			};
			wrapper = shallow(<Button {...props} />);
		});

		it('Should render a button', () => {
			const button = findByTestAttr(wrapper, 'Button');
			expect(button.length).toBe(1);
		});

		it('Should emit callback on click event', () => {
			const button = findByTestAttr(wrapper, 'Button');
			button.simulate('click');
			const callback = mockFunc.mock.calls.length;
			expect(callback).toBe(1);
		});
	});
});
