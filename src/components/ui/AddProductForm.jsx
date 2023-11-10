
import { useContext, useState } from "react";
import { ProductsContext } from "../../context/Products";

const AddProductForm = () => {
	const { addProduct } = useContext(ProductsContext);
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
		console.log(Object.fromEntries(formData))
		console.log(formData)
        data.tags = []
		for (const pair of formData.entries()) {
            if (pair[0] == "tags"){
                data.tags.push(pair[1])
            }
		}
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
		<>
			<form className="add-product" onSubmit={handleSubmit}>
				<div className="block">
					<label htmlFor="name">Nombre del producto:</label>
					<input name="name" required></input>
				</div>
				<div className="block">
					<label htmlFor="brand">Marca:</label>
					<input name="brand"></input>
				</div>
				<div className="block">
					<label htmlFor="minQuantity">Cantidad Minima:</label>
					<input name="minQuantity" type="number"></input>
				</div>
				<div>
					<label htmlFor="tags">Tags:</label>
					<select name="tags">
						<option>Higiene</option>
						<option>Verduras</option>
						<option>Cocina</option>
						<option>Otros</option>
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
				{error && <p class="error">Error: {error}</p>}
				{success && <p class="success">{success}</p>}
			</form>
		</>
	);
};

export default AddProductForm