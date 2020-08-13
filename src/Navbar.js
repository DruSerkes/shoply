import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Total from './Total';
import './Navbar.css';

const Navbar = () => {
	const products = useSelector((state) => state.products);

	return (
		<nav className="Navbar">
			<NavLink to="/">
				<img src="./favicon.ico" alt="Shoply" />
			</NavLink>
			{/* <NavLink to="/cart">cart</NavLink> */}
			<Total products={products} />
		</nav>
	);
};

export default Navbar;
