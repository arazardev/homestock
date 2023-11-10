import { useContext, useState } from "react"
import { ProductsContext } from "../../context/Products"

const AddCategoryForm = () => {

    const {addCategory} = useContext(ProductsContext)
    const [error,setError] = useState("")
    const [success,setSuccess] = useState(false)

    const handleSubmit = (e)=>{
        setSuccess(false)
        e.preventDefault()
        const formData = new FormData(e.target)
        try {
            addCategory(formData.get("categoryName"))
            setSuccess(true)
        } catch (error) {
            setError(error.message)
        }
    }

  return (
		<form className="add" onSubmit={handleSubmit}>
			<div className="block">
				<label>Nombre</label>
				<input name="categoryName" required></input>
			</div>
            <button type="submit">Agregar</button>
            {
                error && <p className="danger">{error}</p>
            }
            {
                success && <p className="success">¡Categoria agregada!</p>
            }
		</form>
	);
}

export default AddCategoryForm