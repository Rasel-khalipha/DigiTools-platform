import React, { use } from "react";
import AvailableProduct from "../availableProducts/AvailableProduct";
import CartProducts from "../cartProducts/CartProducts";

const Products = ({
	productsPromise,
	selectedProducts,
	setSelectedProducts,
	selectedButton,
	setSelectedButton,
}) => {
	const products = use(productsPromise);

	return (
		<>
			<div className="max-w-300 mx-auto px-0 py-30">
				<div className="text-center w-135 mx-auto mb-10">
					<h2 className="font-extrabold text-5xl text-[#101727] mb-4">
						Premium Digital Tools
					</h2>
					<p className="font-normal text-base text-[#627382] mb-4">
						Choose from our curated collection of premium digital products
						designed to boost your productivity and creativity.
					</p>

					<div className="flex items-center justify-center gap-7.5">
						<button
							onClick={() => setSelectedButton("products")}
							className={`${
								selectedButton === "products"
									? "w-30 bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-6 py-3.5 rounded-full text-white font-bold text-base cursor-pointer"
									: "w-30 btn btn-ghost text-[#25065D] font-medium text-base cursor-pointer"
							} rounded-full`}
						>
							Products
						</button>
						<button
							onClick={() => setSelectedButton("cart")}
							className={`${
								selectedButton === "cart"
									? "w-30 bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-6 py-3.5 rounded-full text-white font-bold text-base cursor-pointer"
									: "w-30 btn btn-ghost text-[#25065D] font-medium text-base cursor-pointer"
							} rounded-full`}
						>
							Cart ({selectedProducts.length})
						</button>
					</div>
				</div>
				{selectedButton === "products" && (
					<AvailableProduct
						products={products}
						selectedProducts={selectedProducts}
						setSelectedProducts={setSelectedProducts}
					/>
				)}
				{selectedButton === "cart" && (
					<CartProducts
						products={products}
						selectedProducts={selectedProducts}
						setSelectedProducts={setSelectedProducts}
					/>
				)}
			</div>
		</>
	);
};

export default Products;
