const INITIAL_STATE = { items: {} };

export default function cartReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'ADD_TO_CART':
			return { ...state, items: [ ...state.items, action.id ] };
		case 'REMOVE_FROM_CART':
			let idxToRemove = state.items.indexOf(action.id);
			let items = state.items.slice(0, idxToRemove).concat(state.items.slice(idxToRemove + 1));
			return { ...state, items };
		case 'CLEAR_CART':
			return { ...state, items: [] };
		default:
			return state;
	}
}
