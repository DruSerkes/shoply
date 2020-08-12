import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import ProductCard from './ProductCard';
import Total from './Total';
import './ProductList.css';

const ProductList = () => {
	const data = useSelector((state) => state.data, shallowEqual);

	return (
		<div className="ProductList">
			<h1>Shoply</h1>
			<Total products={data.products} />
			<section className="ProductList-Products">
				{Object.keys(data.products).map((p) => <ProductCard id={p} data={data.products[p]} />)}
			</section>
		</div>
	);
};

export default ProductList;
