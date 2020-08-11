import React from 'react';
import { useSelector } from 'react-redux';

const AddRemoveItemButton = ({ id, cart }) => {
	// const items = useSelector((state) => state.cart.items);
	let num = cart.reduce((num, item) => {
		if (item === id) num++;
    }, 0);
    
	return (
		<div className="AddRemoveItemButton">
			<button className="Remove">-</button>
			<span> {num} </span>
			<button className="Add">+</button>
		</div>
	);
};

export default AddRemoveItemButton;
