import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddRemoveItemButton from './AddRemoveItemButton';
import upperfirst from 'lodash.upperfirst';

const ProductDetails = () => {
	const { id } = useParams();
	const item = useSelector((state) => state.data.products[id]);

	return (
		<div className="ProductDetails">
			<h1>{upperfirst(item.name)}</h1>
			<div className="ProductDetails-Left">
				<img src={item.image_url} alt={item.name} />
			</div>
			<div className="ProductDetails-Right">
				<p>Price: ${item.price}</p>
				<h4>Details</h4>
				<p>{item.description}</p>
				<AddRemoveItemButton id={id} />
			</div>
			<Link to="/">
				<button>Go Back</button>
			</Link>
		</div>
	);
};

export default ProductDetails;
