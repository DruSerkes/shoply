import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ProductList = () => {
	const data = useSelector((state) => state.data);
	console.log(data);
	return (
		<div className="ProductList">
			<h1>Shoply</h1>
			<section className="ProductList-Products">
				{data.products.map((p) => <ProductCard id={p} data={data.products[p]} />)}
			</section>
		</div>
	);
};

export default ProductList;
