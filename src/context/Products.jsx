import React, {createContext, useEffect, useState} from 'react'

export const ProductsContext = createContext([])

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState({})
    const [categories,setCategories] = useState([])

    useEffect(()=>{
      if (localStorage.getItem("products")){
        setProducts(JSON.parse(localStorage.getItem("products")));
      }
      if (localStorage.getItem("categories")){
        setCategories(JSON.parse(localStorage.getItem("categories")));
      }
    },[])

    //CATEGORIA

    const addCategory = (category)=>{
      let updatedCategories = categories.concat(category)
      setCategories(updatedCategories)
      localStorage.setItem("categories",JSON.stringify(updatedCategories))
    }
    
    const deleteCategory = (category)=>{
      let updatedCategories = categories.filter((c)=>c!==category)
      setCategories(updatedCategories)
      localStorage.setItem("categories",JSON.stringify(updatedCategories))
    }

    //PRODUCTOS

    const addProduct = (product)=> {
        if (Object.keys(products).includes(product.label)){
          throw new Error("El producto ya existe")
        }
        const newProductsState = {...products,[product.label]:{...product,stock:0}}
        setProducts(newProductsState)
        localStorage.setItem("products",JSON.stringify(newProductsState))
    }

    const addProductStock = ({ label, amount }) => {
      const newStock = parseInt([products[label].stock]) + parseInt(amount)
      if (newStock < 0){
        return
      }
      const newProductsState = {
				...products,
				[label]: {...products[label], stock: newStock },
			}
			setProducts(newProductsState);
      localStorage.setItem("products",JSON.stringify(newProductsState))
		};

    const deleteProduct = ({label}) =>{
      let auxProducts = {...products}
      delete auxProducts[label]
      setProducts(auxProducts)
      localStorage.setItem("products",JSON.stringify(auxProducts))
    }

  return <ProductsContext.Provider value={{categories,addCategory,deleteCategory,products,addProduct,deleteProduct,addProductStock}}>{children}</ProductsContext.Provider>;
}
