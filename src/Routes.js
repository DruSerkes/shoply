import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Routes = () => {
	return (
		<Switch>
			<Route path="products/:id">
				<ProductDetails />
			</Route>
			<Route path="/">
				<ProductList />
			</Route>
			<Redirect path="/" />
		</Switch>
	);
};

export default Routes;
