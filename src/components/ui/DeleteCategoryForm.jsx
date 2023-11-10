import React, { useContext } from 'react'
import { ProductsContext } from '../../context/Products'
import { TrashIcon } from './Icons'

const DeleteCategoryForm = () => {
    const {categories,deleteCategory} = useContext(ProductsContext)
    const handleDelete = (e)=>{
        const formData = new FormData(e.target)
        deleteCategory(formData.get("categoryName"))
    }
  return (<form className='add' onSubmit={handleDelete}>
    <div className='block'>
        <label>Categoria a eliminar:</label>
        <select name="categoryName" required>
            {categories.map((c)=>{
                return <option key={c}>{c}</option>
            })}
        </select>
    </div>
        <button className='red'><TrashIcon></TrashIcon> Eliminar</button>
  </form>
  )
}

export default DeleteCategoryForm