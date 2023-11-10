import { useContext, useEffect, useState } from 'react'
import './index.css'
import { ProductsContext } from './context/Products';
import Product from './components/ui/Product';
import AsideList from './components/ui/AsideList';
import AsideMenu from './components/ui/AsideMenu';
import Header from './components/ui/Header';
import { UserProvider } from './context/User';

function App() {
	const { products,search } = useContext(ProductsContext);
	
	return (
		<section className="container">
			<Header></Header>
			<AsideMenu />
			<main>
				{Object.keys(products)?.map((label) => {
					if (label.includes(search)){
						return (
							<Product
								product={products[label]}
								key={products[label].key}
							></Product>
						);
					}
				})}
			</main>
			<UserProvider>
				<AsideList />
			</UserProvider>
			<footer></footer>
		</section>
	);
}


export default App
