import React, { useContext } from 'react'
import ModalFromButton from './ModalFromButton';
import { ProductsContext } from '../../context/Products';

const Product = ({product}) => {
  
	const { addProductStock } = useContext(ProductsContext);
  return (
		<div className="product">
			<h3>
				<strong>{product.name}:</strong>{" "}
				<span className={product.minQuantity <= product.stock ? "" : "danger"}>
					{product.stock}
				</span>
			</h3>
			<div className="product-buttons">
				<button
					onClick={() => addProductStock({ label: product.label, amount: -1 })}
				>
					➖
				</button>
				<button
					onClick={() => addProductStock({ label: product.label, amount: 1 })}
				>
					➕
				</button>
				<ModalFromButton buttonText={"🔎"}>
					<table className="product-table">
						<tbody>
							<tr>
								<th>Nombre</th>
								<td>{product.name}</td>
							</tr>
							<tr>
								<th>Marca</th>
								<td>{product.brand}</td>
							</tr>
							<tr>
								<th>Cant.Minima</th>
								<td>{product.minQuantity}</td>
							</tr>
						</tbody>
					</table>
				</ModalFromButton>
			</div>
		</div>
	);
}

export default Product