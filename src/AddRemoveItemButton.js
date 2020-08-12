import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './reducers/actions';
import './AddRemoveItemButton.css';

const AddRemoveItemButton = ({ id }) => {
	const [ count, setCount ] = useState(0);
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const handleAdd = () => {
		dispatch(addToCart(id));
	};
	const handleRemove = () => {
		if (count > 0) {
			dispatch(removeFromCart(id));
		}
	};
	useEffect(
		() => {
			let newCount = 0;
			cart.items.forEach((item) => {
				if (item === id) newCount++;
			});
			setCount(newCount);
		},
		[ cart, id ]
	);

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
