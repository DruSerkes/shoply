import React from 'react';

const ProductCard = ({ id, data }) => {
	return (
		<div className="ProductCard">
			<img src={data.image_url} alt={data.name} />
			<h4>{data.name}</h4>
			<p>Price: ${data.price}</p>
			<p>{data.description}</p>
		</div>
	);
};

export default ProductCard;
