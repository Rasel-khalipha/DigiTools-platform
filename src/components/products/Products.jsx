import React, { use } from "react";
import { IoMdCheckmark } from "react-icons/io";

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
							<div className="border-2 border-[#f2f2f2] p-6 rounded-2xl space-y-4 relative">
								<button
									className={`absolute top-2.5 right-2.5 px-3 py-1.5 rounded-full font-medium text-sm ${tagStyles[product.tagType] ? tagStyles[product.tagType].bg : tagStyles.default.bg}`}
								>
									<span
										className={`${tagStyles[product.tagType] ? tagStyles[product.tagType].text : tagStyles.default.text} capitalize`}
									>
										{product.tag}
									</span>
								</button>

								<div className="w-15 h-15 border border-[#f2f2f2] rounded-full inline-flex items-center justify-center mb-6">
									<img
										className="w-8 h-8"
										src={product.icon}
										alt={product.name}
									/>
								</div>
								<h3 className="font-bold text-2xl text-[#101727]">
									{product.name}
								</h3>
								<p className="font-normal text-base text-[#627382]">
									{product.description}
								</p>
								<h3 className="font-bold text-2xl text-[#101727]">
									${product.price}
									<span className="font-normal text-base text-[#627382] capitalize">
										/{product.period}
									</span>
								</h3>
								<ul className="space-y-2">
									{product.features.map((feature, index) => (
										<li
											key={index}
											className="flex items-center gap-2 text-[#627382] font-normal text-base"
										>
											<IoMdCheckmark className="text-[#30B868]" />{" "}
											<span>{feature}</span>
										</li>
									))}
								</ul>
								<button className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-6 py-3.5 rounded-full text-white font-bold text-base cursor-pointer text-center">
									Buy Now
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Products;
