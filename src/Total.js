import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Total.css';

const Total = ({ products }) => {
	const [ total, setTotal ] = useState(0);
	const cart = useSelector((state) => state.cart);
	useEffect(
		() => {
			let newTotal = cart.items.reduce((acc, id) => {
				return acc + products[id].price;
			}, 0);
			setTotal(newTotal);
		},
		[ cart, products ]
	);
	return (
		<Link to="/cart">
			<p className="Total">
				<b>Cart Total: ${total.toFixed(2)} </b>
				<span>
					<i className="fas fa-shopping-cart" />
					<span className="Total-Badge">{cart.totalItems}</span>
				</span>
			</p>
		</Link>
	);
};

export default Total;
