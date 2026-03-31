import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

const ProductCard = ({ product, tagStyles }) => {
	const [buy, setBuy] = useState(false);

	const handleBuy = () => {
		setBuy(true);
	};

	return (
		<>
			<div>
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
						<img className="w-8 h-8" src={product.icon} alt={product.name} />
					</div>
					<h3 className="font-bold text-2xl text-[#101727]">{product.name}</h3>
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
					<button
						onClick={handleBuy}
						disabled={buy}
						className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-6 py-3.5 rounded-full text-white font-bold text-base cursor-pointer text-center"
					>
						{buy ? "Added to Cart" : "Buy Now"}
					</button>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
