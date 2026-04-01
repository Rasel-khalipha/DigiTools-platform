import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import Static from "./components/static/Static";

const getProducts = async () => {
	const res = await fetch("/products.json");
	const products = await res.json();
	return products;
};

function App() {
	const productsPromise = getProducts();
	const [selectedProducts, setSelectedProducts] = useState([]);
	const [selectedButton, setSelectedButton] = useState("products");
	return (
		<>
			<Navbar
				selectedProducts={selectedProducts}
				setSelectedButton={setSelectedButton}
			/>
			<Banner />
			<Static />
			<Suspense
				fallback={<span className="loading loading-infinity loading-xl"></span>}
			>
				<Products
					productsPromise={productsPromise}
					selectedProducts={selectedProducts}
					setSelectedProducts={setSelectedProducts}
					selectedButton={selectedButton}
					setSelectedButton={setSelectedButton}
				/>
			</Suspense>
		</>
	);
}

export default App;
