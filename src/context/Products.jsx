import React, {createContext, useEffect, useState} from 'react'

export const ProductsContext = createContext([])

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState({})

    useEffect(()=>{
      if (localStorage.getItem("products")){
        setProducts(JSON.parse(localStorage.getItem("products")));
      }
    },[])

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

  return <ProductsContext.Provider value={{products,addProduct,addProductStock}}>{children}</ProductsContext.Provider>;
}
