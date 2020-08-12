const INITIAL_STATE = { items: [], totalItems: 0 };

export default function cartReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'ADD_TO_CART':
			let items = [ ...state.items, action.id ];
			let totalItems = items.length;
			return { ...state, items, totalItems };
		case 'REMOVE_FROM_CART':
			let idxToRemove = state.items.indexOf(action.id);
			let updatedItems = state.items.slice(0, idxToRemove).concat(state.items.slice(idxToRemove + 1));
			let updatedTotalItems = updatedItems.length;
			return { ...state, items: updatedItems, totalItems: updatedTotalItems };
		case 'CLEAR_CART':
			return { ...state, items: [], totalItems: 0 };
		default:
			return state;
	}
}
