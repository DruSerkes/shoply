import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';
import Cart from './Cart';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/products/:id">
				<ProductDetails />
			</Route>
			<Route exact path="/cart">
				<Cart />
			</Route>
			<Route exact path="/">
				<ProductList />
			</Route>
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
