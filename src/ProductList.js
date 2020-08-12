import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import ProductCard from './ProductCard';
// import AddRemoveItemButton from './AddRemoveItemButton';
import './ProductList.css';

const ProductList = () => {
	const data = useSelector((state) => state.data, shallowEqual);
	// const cart = useSelector((state) => state.cart, shallowEqual);
	return (
		<div className="ProductList">
			<h1>Shoply</h1>
			<section className="ProductList-Products">
				{Object.keys(data.products).map((p) => (
					<ProductCard id={p} data={data.products[p]} />
					// {/* <AddRemoveItemButton id={p} items={cart.items} /> */}
					// {/* </ProductCard> */}
				))}
			</section>
		</div>
	);
};

export default ProductList;
