import React from 'react';
import './ProductCard.css';
import upperfirst from 'lodash.upperfirst';

const ProductCard = ({ id, data }) => {
	return (
		<div className="ProductCard" key={id} id={id}>
			<img src={data.image_url} alt={data.name} />
			<h4>{upperfirst(data.name)}</h4>
			<p>Price: ${data.price}</p>
			<p>{data.description}</p>
		</div>
	);
};

export default ProductCard;
