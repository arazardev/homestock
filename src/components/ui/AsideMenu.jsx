import React, { useContext } from "react";
import ModalFromButton from "./ModalFromButton";
import AddProductForm from "./AddProductForm";
import AddCategoryForm from "./AddCategoryForm";
import DeleteCategoryForm from "./DeleteCategoryForm";
import { ProductsContext } from "../../context/Products";

const AsideMenu = () => {
	const {setSearch} = useContext(ProductsContext)

	const handleSearch = (e)=>{
		const term = e.target.value
		setSearch(term)
	}
	return (
		<aside className="filters">
			<ModalFromButton buttonClassName={"success"} buttonText={"+Inventariar producto"}>
				<AddProductForm />
			</ModalFromButton>
			<ModalFromButton buttonClassName={"menu"} buttonText={"+Agregar Categoria"}>
				<AddCategoryForm />
			</ModalFromButton>
			<ModalFromButton buttonClassName={"red"} buttonText={"- Eliminar Categoria"}>
				<DeleteCategoryForm />
			</ModalFromButton>
			<br></br>
			<label className="bold antique">Buscar:</label>
			<input
				placeholder="Nombre o marca..."
				type="text"
				name="search"
				onChange={handleSearch}
			></input>
		</aside>
	);
};

export default AsideMenu;
