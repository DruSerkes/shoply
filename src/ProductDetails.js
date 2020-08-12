import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddRemoveItemButton from './AddRemoveItemButton';
import upperfirst from 'lodash.upperfirst';
import Total from './Total';
import './ProductDetails.css';

const ProductDetails = () => {
	const { id } = useParams();
	const products = useSelector((state) => state.data.products);
	const item = products[id];
	return (
		<div className="ProductDetails">
			<h1>{upperfirst(item.name)}</h1>
			<Total products={products} />
			<div className="ProductDetails-Container">
				<div className="ProductDetails-Left">
					<img src={item.image_url} alt={item.name} />
					<AddRemoveItemButton id={id} />
					<small>Add to cart</small>
				</div>
				<div className="ProductDetails-Right">
					<p>
						<b>Price: </b>${item.price}
					</p>
					<h4>Product Details</h4>
					<p>{item.description}</p>
					<Link to="/">
						<button>Go Back</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
