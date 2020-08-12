import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddRemoveItemButton from './AddRemoveItemButton';
import upperfirst from 'lodash.upperfirst';
import './ProductDetails.css';

const ProductDetails = () => {
	const { id } = useParams();
	const item = useSelector((state) => state.data.products[id]);

	return (
		<div className="ProductDetails">
			<h1>{upperfirst(item.name)}</h1>
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
					{/* <AddRemoveItemButton id={id} /> */}
					<Link to="/">
						<button>Go Back</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
