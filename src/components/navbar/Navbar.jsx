import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({ selectedProducts, setSelectedButton }) => {
	return (
		<>
			<div className="border-b border-[#f2f2f2]">
				<div className="navbar w-90 sm:w-150 lg:w-300 mx-auto px-0 py-6.5">
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost lg:hidden"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									{" "}
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>{" "}
								</svg>
							</div>
							<ul
								tabIndex="-1"
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
							>
								<li>
									<a>Products</a>
								</li>
								<li>
									<a>Features</a>
								</li>
								<li>
									<a>Pricing</a>
								</li>
								<li>
									<a>Testimonials</a>
								</li>
								<li>
									<a>FAQ</a>
								</li>
							</ul>
						</div>
						<a className="">
							<h2 className="font-black text-lg md:text-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent leading-normal">
								DigiTools
							</h2>
						</a>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal px-1 font-semibold text-base text-[#101727]">
							<li>
								<a>Products</a>
							</li>
							<li>
								<a>Features</a>
							</li>
							<li>
								<a>Pricing</a>
							</li>
							<li>
								<a>Testimonials</a>
							</li>
							<li>
								<a>FAQ</a>
							</li>
						</ul>
					</div>
					<div className="navbar-end gap-4">
						<div
							className="relative cursor-pointer"
							onClick={() => setSelectedButton("cart")}
						>
							<FiShoppingCart className="text-[#101727]" />
							<span className="badge badge-secondary badge-xs absolute -top-2 -right-3">
								{selectedProducts.length}
							</span>
						</div>
						<a href="" classname="font-semibold text-base text-[#101727]">
							Login
						</a>
						<a className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-linear-to-r hover:from-[#9514FA] hover:to-[#4F39F6] font-semibold text-white text-base transition duration-300 ease-in-out">
							Get Started
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
