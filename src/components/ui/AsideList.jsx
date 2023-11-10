import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/Products";
import { UserContext } from "../../context/User";

const AsideList = () => {
	const { products, categories } = useContext(ProductsContext);
	const {preferences,setListAll} = useContext(UserContext)
	const [productsByCategory, setProductsByCategory] = useState();

	useEffect(() => {
		let aux = {};
		categories.forEach((category) => {
			aux[category] = []
		});
		Object.keys(products).forEach((p) => {
			if (preferences.listAll){
				if (products[p].stock < products[p].minQuantity) {
					aux[products[p].category].push(products[p].name);
				}
			} else {
				if (products[p].stock < products[p].minQuantity && products[p].mandatory) {
					aux[products[p].category].push(products[p].name);
				}
			}
		});
		setProductsByCategory(aux);
	}, [products,preferences]);

	return (
			<aside className="list">
				<div className="block">
					<label >Listar todo:</label>
					<input type="checkbox" onChange={e=>setListAll(e.target.checked)}></input>
				</div>
				<br></br>
				<br></br>
				{productsByCategory &&
					Object.keys(productsByCategory).map((category) => {
						return (
							<div key={category}>
								{productsByCategory[category].length > 0 && category}
								<ul>
									{productsByCategory[category].map((c) => {
										return <li key={c}>- {c}</li>;
									})}
								</ul>
							</div>
						);
					})}
				<ul></ul>
			</aside>
	);
};

export default AsideList;
