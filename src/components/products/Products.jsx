import React, { use, useState } from "react";
import ProductCard from "../ui/productCard/ProductCard";

const Products = ({ productsPromise }) => {
	const products = use(productsPromise);

	const tagStyles = {
		new: {
			bg: "bg-[#DBFCE7]",
			text: "text-[#0A883E]",
		},
		popular: {
			bg: "bg-[#E1E7FF]",
			text: "bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent",
		},
		"best seller": {
			bg: "bg-[#FEF3C6]",
			text: "text-[#BB4D00]",
		},
		default: {
			bg: "bg-[#f2f2f2]",
			text: "text-[#627382]",
		},
	};

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
						<button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-6 py-3.5 rounded-full text-white font-bold text-base cursor-pointer">
							Products
						</button>
						<button className="font-medium text-base text-[#25065D] cursor-pointer">
							cart (0)
						</button>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{products.map((product) => (
						<div key={product.id}>
							<ProductCard product={product} tagStyles={tagStyles} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Products;
