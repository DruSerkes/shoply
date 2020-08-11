import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from './ProductCard';
import AddRemoveItemButton from './AddRemoveItemButton';
import './ProductList.css';

const ProductList = () => {
	const data = useSelector((state) => state.data);
	const cart = useSelector((state) => state.cart.items);

	
	return (
		<div className="ProductList">
			<h1>Shoply</h1>
			<section className="ProductList-Products">
				{Object.keys(data.products).map((p) => (
					<ProductCard id={p} data={data.products[p]}>
						<AddRemoveItemButton id={p} cart={cart} />
					</ProductCard>
				))}
			</section>
		</div>
	);
};

export default ProductList;
