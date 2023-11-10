import { useContext, useState } from 'react'
import './index.css'
import { ProductsContext } from './context/Products';
import ModalFromButton from './components/ui/ModalFromButton';
import AddProductForm from './components/ui/AddProductForm';
import Product from './components/ui/Product';

function App() {
	const { products } = useContext(ProductsContext);
	const [search,setSearch] = useState("")
	const [productsFiltered,setProductsFiltered] = useState({})

	// useEffect(()=>{
	// 	for (product in Object.keys(products)){

	// 	}
	// },[search])
	return (
			<section className="container">
				<header>
					<h1>🏠 Home Stock</h1>
				</header>
				<aside>
					<span>
						<ModalFromButton buttonText={"Agregar producto"}>
							<AddProductForm />
						</ModalFromButton>
						<input
							placeholder="Filtrar productos"
							onChange={(e) => setSearch(e.target.value)}
						></input>
					</span>
				</aside>
				<main>
					{Object.keys(products)?.map((label) => {
						return (
							<Product
								product={products[label]}
								key={products[label].key}
							></Product>
						);
					})}
				</main>
				<footer></footer>
			</section>
	);
}


export default App
