import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from '../utils/index';
import App from './App';

const setUp = (initialState = {}) => {
	const store = testStore(initialState);
	const wrapper = shallow(<App store={store} />)
		.childAt(0)
		.dive();
	return wrapper;
};

describe('App Component', () => {
	let wrapper;
	beforeEach(() => {
		const initialState = {
			posts: [
				{
					title: 'Test title 1',
					body: 'Test desc',
				},
				{
					title: 'Test title 2',
					body: 'Test desc',
				},
				{
					title: 'Test title 3',
					body: 'Test desc',
				},
			],
		};
		wrapper = setUp(initialState);
	});
	it('Should render without errors', () => {
		const component = findByTestAttr(wrapper, 'App');
		expect(component.length).toBe(1);
	});

	it('ExampleMethod should update state as expected', () => {
		const classInstance = wrapper.instance();
		classInstance.exampleMethod_updatesState();
		const newState = classInstance.state.hideBtn;
		expect(newState).toBe(true);
	});

	it('exampleMethod_returnsAValue should return value as expected', () => {
		const classInstance = wrapper.instance();
		const newValue = classInstance.exampleMethod_returnsAValue(1);

		expect(newValue).toBe(2);
	});
});
