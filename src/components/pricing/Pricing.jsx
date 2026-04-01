import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const Pricing = () => {
	return (
		<>
			<div>
				<div className="max-w-300 mx-auto py-30">
					<div className="text-center mx-auto mb-10">
						<h2 className="font-extrabold text-5xl text-[#101727] mb-4">
							Simple, Transparent Pricing
						</h2>
						<p className="font-normal text-base text-[#627382] mb-10">
							Choose the plan that fits your needs. Upgrade or downgrade
							anytime.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center md:justify-items-start">
						<div className="w-95 border-2 border-[#f1f1f1] rounded-2xl p-6 h-125">
							<h3 className="font-bold text-2xl text-[#101727] mb-2">
								Starter
							</h3>
							<p className="font-normal text-base text-[#627382] mb-6">
								Perfect for getting started.
							</p>
							<h3 className="font-bold text-[2.5rem] text-[#101727] mb-6">
								$0
								<span className="font-normal text-[1.25rem] text-[#627382] capitalize">
									/month
								</span>
							</h3>
							<ul className="space-y-2 mb-27">
								<li className="flex items-center gap-2">
									<IoMdCheckmark className="text-[#30B868]" />
									<span className="font-medium text-base text-[#627382]">
										Access to 10 free tools
									</span>
								</li>
								<li className="flex items-center gap-2">
									<IoMdCheckmark className="text-[#30B868]" />
									<span className="font-medium text-base text-[#627382]">
										Basic templates
									</span>
								</li>
								<li className="flex items-center gap-2">
									<IoMdCheckmark className="text-[#30B868]" />
									<span className="font-medium text-base text-[#627382]">
										Community support
									</span>
								</li>
								<li className="flex items-center gap-2">
									<IoMdCheckmark className="text-[#30B868]" />
									<span className="font-medium text-base text-[#627382]">
										1 project per month
									</span>
								</li>
							</ul>
							<button className="btn py-3.75 font-bold text-base text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-linear-to-r hover:from-[#9514FA] hover:to-[#4F39F6] transition duration-300 ease-in-out w-full">
								Get Started Free
							</button>
						</div>
						<div className="w-95 h-125 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl p-6 text-white relative">
							<span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FEF3C6] text-[#BB4D00] font-bold py-1 px-4 rounded-full">
								Most Popular
							</span>
							<h3 className="font-bold text-2xl group-hover:text-[#101727] mb-2">
								Pro
							</h3>
							<p className="font-normal text-base  mb-6">
								Best for professionals
							</p>
							<h3 className="font-bold text-[2.5rem] mb-6">
								$29
								<span className="font-normal text-[1.25rem] capitalize">
									/month
								</span>
							</h3>
							<ul className="space-y-2 mb-11.5 font-medium text-base">
								<li className="flex items-center gap-2">
									<IoMdCheckmark className="" />
									<span className="">Access to all premium tools</span>
								</li>
								<li className="flex items-center gap-2">
									<IoMdCheckmark className="" />
									<span className="">Unlimited templates</span>
								</li>
								<li className="flex items-center gap-2">
									<IoMdCheckmark className="" />
									<span className="">Priority support</span>
								</li>
								<li className="flex items-center gap-2">
									<IoMdCheckmark className="" />
									<span className="">Unlimited projects</span>
								</li>
								<li className="flex items-center gap-2">
									<IoMdCheckmark className="" />
									<span className="">Cloud sync</span>
								</li>
								<li className="flex items-center gap-2">
									<IoMdCheckmark className="" />
									<span className="">Advanced analytics</span>
								</li>
							</ul>
							<div className="w-full h-10 p-px font-bold text-normal rounded-full text-[#101727] bg-linear-to-r from-[#4F39F6] to-[#9514FA] cursor-pointer">
								<div className="w-full h-full bg-white rounded-full">
									<span className="flex items-center gap-2 justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent w-full h-full rounded-full">
										Start Pro Trial
									</span>
								</div>
							</div>
						</div>
						<div className="w-95 h-125 border-2 border-[#f1f1f1] rounded-2xl p-6">
							<h3 className="font-bold text-2xl text-[#101727] mb-2">
								Enterprise
							</h3>
							<p className="font-normal text-base text-[#627382] mb-6">
								For teams and businesses
							</p>
							<h3 className="font-bold text-[2.5rem] text-[#101727] mb-6">
								$99
								<span className="font-normal text-[1.25rem] text-[#627382] capitalize">
									/month
								</span>
							</h3>
							<ul className="space-y-2 mb-11.5">
								<li className="flex items-center gap-2">
									<IoMdCheckmark className="text-[#30B868]" />
									<span className="font-medium text-base text-[#627382]">
										Everything in Pro
									</span>
								</li>
								<li className="flex items-center gap-2">
									<IoMdCheckmark className="text-[#30B868]" />
									<span className="font-medium text-base text-[#627382]">
										Team collaboration
									</span>
								</li>
								<li className="flex items-center gap-2">
									<IoMdCheckmark className="text-[#30B868]" />
									<span className="font-medium text-base text-[#627382]">
										Custom integrations
									</span>
								</li>
								<li className="flex items-center gap-2">
									<IoMdCheckmark className="text-[#30B868]" />
									<span className="font-medium text-base text-[#627382]">
										Dedicated support
									</span>
								</li>
								<li className="flex items-center gap-2">
									<IoMdCheckmark className="text-[#30B868]" />
									<span className="font-medium text-base text-[#627382]">
										SLA guarantee
									</span>
								</li>
								<li className="flex items-center gap-2">
									<IoMdCheckmark className="text-[#30B868]" />
									<span className="font-medium text-base text-[#627382]">
										Custom branding
									</span>
								</li>
							</ul>
							<button className="btn py-3.75 font-bold text-base text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-linear-to-r hover:from-[#9514FA] hover:to-[#4F39F6] transition duration-300 ease-in-out w-full">
								Contact Sales
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Pricing;
