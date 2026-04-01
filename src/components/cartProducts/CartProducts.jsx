import React from "react";
import { toast } from "react-toastify";

const CartProducts = ({ selectedProducts, setSelectedProducts }) => {
	const handleRemove = (product) => {
		const updatedProducts = selectedProducts.filter(
			(item) => item.id !== product.id,
		);
		setSelectedProducts(updatedProducts);
		toast.info("Product removed from your cart.");
	};

	const totalPrice = selectedProducts.reduce(
		(total, product) => total + product.price,
		0,
	);

	const handlePayment = () => {
		setSelectedProducts([]);
		toast.success("Payment successful! Thank you for your purchase.");
	};
	return (
		<>
			<div>
				<div className="border-2 border-[#f2f2f2] p-10 rounded-2xl space-y-4">
					<h2 className="font-bold text-2xl text-[]">Your Cart</h2>
					{selectedProducts.length === 0 ? (
						<>
							<div className="flex justify-center items-center text-center h-64">
								<h2 className="font-bold text-xl text-[#627382]">
									Your cart is empty.
								</h2>
							</div>
						</>
					) : (
						<>
							<div className="space-y-4">
								{selectedProducts.map((product) => (
									<div
										key={product.id}
										className="flex justify-between items-center gap-4 border-b border-[#f2f2f2] p-5 bg-[#F9FAFC] rounded-2xl"
									>
										<div className="flex items-center gap-4">
											<div className="w-15 h-15 bg-white border border-[#f2f2f2] rounded-full inline-flex items-center justify-center">
												<img
													className="w-8 h-8"
													src={product.icon}
													alt={product.name}
												/>
											</div>
											<div>
												<h3 className="font-semibold text-[20px] text-[#101727]">
													{product.name}
												</h3>
												<p className="font-medium text-base text-[#627382]">
													${product.price}
												</p>
											</div>
										</div>
										<div
											className="font-bold text-base text-[#FF3980] cursor-pointer"
											onClick={() => handleRemove(product)}
										>
											Remove
										</div>
									</div>
								))}
							</div>

							<div className="flex justify-between items-center mt-6">
								<p className="font-normal text-base text-[#627382]">Total</p>
								<h3 className="font-bold text-2xl text-[#101727]">
									{totalPrice === 0 ? 0 : `$${totalPrice}`}
								</h3>
							</div>

							<button
								onClick={handlePayment}
								className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-linear-to-r hover:from-[#9514FA] hover:to-[#4F39F6] transition duration-500 rounded-full py-3.75 cursor-pointer text-white font-bold text-base text-center mt-6"
							>
								Proceed to Checkout
							</button>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default CartProducts;
