import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../src/redux/reducers/index';
import { middlewares } from '../src/redux/createStore';

export const findByTestAttr = (component, attr) => {
	const wrapper = component.find(`[data-test='${attr}']`);
	return wrapper;
};

export const checkProps = (component, expectedProps) => {
	const propsErr = checkPropTypes(
		component.propTypes,
		expectedProps,
		'Props',
		component.name
	);

	return propsErr;
};

export const testStore = (initialState) => {
	const createStoreWithMiddleware = applyMiddleware(...middlewares)(
		createStore
	);
	return createStoreWithMiddleware(rootReducer, initialState);
};
