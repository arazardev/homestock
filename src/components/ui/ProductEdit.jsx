import React, { useContext } from 'react'
import { TrashIcon } from './Icons';
import { ProductsContext } from '../../context/Products';

const ProductEdit = (product) => {

    const {deleteProduct} = useContext(ProductsContext)

  return (
		<div className='product-edit'>
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
						<th>Descripcion</th>
						<td>{product.description}</td>
					</tr>
					<tr>
						<th>Cant.Minima</th>
						<td>{product.minQuantity}</td>
					</tr>
					<tr>
						<th>Categoria</th>
						<td>{product.category}</td>
					</tr>
					<tr>
						<th>Obligatorio</th>
						<td>{product.mandatory ? "Si" : "No"}</td>
					</tr>
				</tbody>
			</table>
			<button className="red" onClick={e=>deleteProduct({label:`${product.name} - ${product.brand}`})}>
				<TrashIcon size="20"></TrashIcon>
			</button>
		</div>
	);
}

export default ProductEdit