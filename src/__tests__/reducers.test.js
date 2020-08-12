// TODO add tests for reducers
import { addToCart, removeFromCart, clearCart } from '../reducers/actions';
import dataReducer from '../reducers/dataReducer';
import cartReducer from '../reducers/cartReducer';

describe('actions tests', () => {
	test('add to cart', () => {
		expect(addToCart(3)).toEqual({ type: 'ADD_TO_CART', id: 3 });
	});
	test('remove from cart', () => {
		expect(removeFromCart(7)).toEqual({ type: 'REMOVE_FROM_CART', id: 7 });
	});
	test('clear cart', () => {
		expect(clearCart()).toEqual({ type: 'CLEAR_CART' });
	});
});

describe('reducer tests', () => {
	test('dataReducer', () => {
		expect(dataReducer({ testing: true })).toEqual({ testing: true });
	});
	test('cart reducer', () => {
		// expect(cartReducer()).toEqual({ items: [], totalItems: 0 });
		expect(cartReducer({ items: [], totalItems: 0 }, { type: 'ADD_TO_CART', id: 1 })).toEqual({
			items      : [ 1 ],
			totalItems : 1
		});
		expect(cartReducer({ items: [ 1 ], totalItems: 1 }, { type: 'REMOVE_FROM_CART', id: 1 })).toEqual({
			items      : [],
			totalItems : 0
		});
		expect(cartReducer({ items: [ 1 ], totalItems: 1 }, { type: 'CLEAR_CART' })).toEqual({
			items      : [],
			totalItems : 0
		});
	});
});
