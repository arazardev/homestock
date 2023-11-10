import React, { useContext } from 'react'
import ModalFromButton from './ModalFromButton';
import { ProductsContext } from '../../context/Products';
import { EditIcon, MinusIcon, PlusIcon } from './Icons';
import ProductEdit from './ProductEdit';

const Product = ({product}) => {
  
	const { addProductStock } = useContext(ProductsContext);
  return (
		<div className="product">
			<h3>
				<strong>{product.name}:</strong>{" "}
				<span className={product.minQuantity <= product.stock ? "success" : "danger"}>
					{product.stock}
				</span>
			</h3>
			<h5>{product.brand}</h5>
			<div className="product-buttons">
				<button className="btn-product sm"
					onClick={() => addProductStock({ label: product.label, amount: -1 })}
				>
					<MinusIcon size="20"></MinusIcon>
				</button>
				<button className="btn-product sm"
					onClick={() => addProductStock({ label: product.label, amount: 1 })}
				>
					<PlusIcon size="20"></PlusIcon>
				</button>
				<ModalFromButton dialogClass='md' className="btn-product sm" buttonText={<EditIcon size="20"></EditIcon>}>
					<ProductEdit {...product}></ProductEdit>
				</ModalFromButton>
			</div>
		</div>
	);
}

export default Product