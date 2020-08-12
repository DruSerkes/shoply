import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './reducers/actions';

const AddRemoveItemButton = ({ id, items }) => {
	const [ count, setCount ] = useState(0);
	const dispatch = useDispatch();
	const handleAdd = () => {
		setCount((count) => count + 1);
		dispatch(addToCart(id));
	};
	const handleRemove = () => {
		if (items.includes(id)) {
			setCount((count) => count - 1);
			dispatch(removeFromCart(id));
		}
	};
	return (
		<div className="AddRemoveItemButton">
			<button className="Remove" onClick={handleRemove}>
				-
			</button>
			<span> {count} </span>
			<button className="Add" onClick={handleAdd}>
				+
			</button>
		</div>
	);
};

export default AddRemoveItemButton;
