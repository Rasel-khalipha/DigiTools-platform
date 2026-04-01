import React from "react";
import ProductCard from "../ui/productCard/ProductCard";

const AvailableProduct = ({ products, selectedProducts, setSelectedProducts }) => {
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
			<div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
					{products.map((product) => (
						<div key={product.id}>
							<ProductCard product={product} tagStyles={tagStyles} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default AvailableProduct;
