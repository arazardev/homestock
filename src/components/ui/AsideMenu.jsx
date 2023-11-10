import React from "react";
import ModalFromButton from "./ModalFromButton";
import AddProductForm from "./AddProductForm";
import AddCategoryForm from "./AddCategoryForm";
import DeleteCategoryForm from "./DeleteCategoryForm";

const AsideMenu = () => {
	return (
		<aside className="filters">
			<ModalFromButton className={"menu"} buttonText={"+Agregar producto"}>
				<AddProductForm />
			</ModalFromButton>
			<ModalFromButton className={"menu"} buttonText={"+Agregar Categoria"}>
				<AddCategoryForm />
			</ModalFromButton>
			<ModalFromButton className={"red"} buttonText={"- Eliminar Categoria"}>
				<DeleteCategoryForm />
			</ModalFromButton>
			<br></br>
			{/* <label>Filtros:</label>
    <input
        placeholder="Nombre..."
        onChange={(e) => setSearch(e.target.value)}
    ></input> */}
		</aside>
	);
};

export default AsideMenu;
