import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/Products";
import { UserContext } from "../../context/User";
import { ClipboardIcon } from "./Icons";

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

	const copyList = ()=>{
		const divList = document.querySelector("#shopList")
		navigator.clipboard.writeText(divList.textContent.replaceAll("-","\n-"))
		window.alert("¡Lista copiada!")
	}

	return (
		<aside className="list">
			<div className="block">
				<label>Listar todo:</label>
				<input
					type="checkbox"
					checked={preferences.listAll}
					onChange={(e) => setListAll(e.target.checked)}
				></input>
			</div>
			<br></br>
			<hr></hr>
			<br></br>
			<div id="shopList">
				{productsByCategory &&
					Object.keys(productsByCategory).map((category) => {
						return (
							<div key={category}>
								{productsByCategory[category].length > 0 && <u>{`\n*${category}`}</u>}
								<ul>
									{productsByCategory[category].map((c) => {
										return <li key={c}>- {c}</li>;
									})}
								</ul>
							</div>
						);
					})}
			</div>
			<br></br>
			<hr></hr>
			<button className="empty" onClick={copyList}>
				<ClipboardIcon size="28"></ClipboardIcon> Copiar lista
			</button>
		</aside>
	);
};

export default AsideList;
