import React from 'react';
import './ProductCard.css';
import upperfirst from 'lodash.upperfirst';
import AddRemoveItemButton from './AddRemoveItemButton';

const ProductCard = ({ id, data, children }) => {
	return (
		<div className="ProductCard" key={id} id={id}>
			<div className="ProductCard-ImageContainer">
				<img src={data.image_url} alt={data.name} />
			</div>
			<h4>{upperfirst(data.name)}</h4>
			<p>Price: ${data.price}</p>
			<p>{data.description}</p>
			{/* {children} */}
			<AddRemoveItemButton id={id} />
		</div>
	);
};

export default ProductCard;
