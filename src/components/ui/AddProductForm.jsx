
import { useContext, useState } from "react";
import { ProductsContext } from "../../context/Products";

const AddProductForm = () => {
	const { addProduct,categories } = useContext(ProductsContext);
	const [error,setError] = useState("")
	const [success,setSuccess] = useState("")
	const [mandatory,setMandatory] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
        let data = {}
        data.name = Object.fromEntries(formData).name
		data.label = `${Object.fromEntries(formData).name} - ${Object.fromEntries(formData).brand}`
		data.brand = Object.fromEntries(formData).brand
		data.minQuantity = Object.fromEntries(formData).minQuantity
		data.mandatory = mandatory
        data.category = Object.fromEntries(formData).category
        data.description = Object.fromEntries(formData).description
        data.inicialStock = Object.fromEntries(formData).inicialStock
        const key=crypto.randomUUID()
		try {
			addProduct({...data,key:key})
			setSuccess("¡Producto agregado!")
			setTimeout(()=>{setSuccess("")},2000)
		} catch (error) {
			setError(error.message)
		}
	};
	return (
			<form className="add" onSubmit={handleSubmit}>
				<div className="block">
					<label htmlFor="name">Nombre del producto:</label>
					<input name="name" type="text" required></input>
				</div>
				<div className="block">
					<label htmlFor="brand">Marca:</label>
					<input name="brand" type="text"></input>
				</div>
				<div className="block">
					<label htmlFor="description">Descripcion:</label>
					<input name="description" type="text"></input>
				</div>
				<div className="block">
					<label htmlFor="inicialStock">Stock Inicial:</label>
					<input name="inicialStock" type="number"></input>
				</div>
				<div className="block">
					<label htmlFor="minQuantity">Cantidad Minima:</label>
					<input name="minQuantity" type="number"></input>
				</div>
				<div>
					<label htmlFor="category">Categoria:</label>
					<br></br>
					<br></br>
					<select name="category">
						{
							categories.map((category)=>{
								return <option key={category}>{category}</option>
							})
						}
					</select>
				</div>
				<div>
					<label htmlFor="mandatory">Obligatorio:</label>
					<input
						name="mandatory"
						type="checkbox"
						onChange={(e) => setMandatory(e.target.checked)}
					></input>
				</div>
				<br></br>
				<hr></hr>
				<button>Agregar</button>
				{error && <p className="error">Error: {error}</p>}
				{success && <p className="success">{success}</p>}
			</form>
	);
};

export default AddProductForm