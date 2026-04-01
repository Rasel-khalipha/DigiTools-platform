import React from "react";
import userImg from "../../assets/user.png";
import packageImg from "../../assets/package.png";
import rocketImg from "../../assets/rocket.png";

const Steps = () => {
	return (
		<>
			<div className="bg-[#f9fafc]">
				<div className="max-w-300 mx-auto px-0 py-30">
					<div className="text-center mx-auto mb-10">
						<h2 className="font-extrabold text-5xl text-[#101727] mb-4">
							Get Started in 3 Steps
						</h2>
						<p className="font-normal text-base text-[#627382] mb-10">
							Start using premium digital tools in minutes, not hours.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center md:justify-items-start">
							<div className="w-95 border-2 border-[#f1f1f1] rounded-2xl p-6 relative">
								<span className=" w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white inline-flex items-center justify-center font-bold text-sm absolute top-5 right-5">
									01
								</span>
								<div className="w-25 h-25 rounded-full bg-linear-to-r from-[#4F39F6]/10 to-[#9514FA]/10 inline-flex items-center justify-center mb-6 mt-22">
									<img src={userImg} alt="user" />
								</div>
								<div className="space-y-4 mb-22">
									<h3 className="font-bold text-2xl text-[#101727]">
										Create Account
									</h3>
									<p className="font-normal text-base text-[#627382]">
										Sign up for free in seconds. No credit card required to get
										started.
									</p>
								</div>
							</div>
							<div className="w-95 border-2 border-[#f1f1f1] rounded-2xl p-6 relative">
								<span className=" w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white inline-flex items-center justify-center font-bold text-sm absolute top-5 right-5">
									02
								</span>
								<div className="w-25 h-25 rounded-full bg-linear-to-r from-[#4F39F6]/10 to-[#9514FA]/10 border-2 border-[#f1f1f1] inline-flex items-center justify-center mb-6 mt-22">
									<img src={packageImg} alt="package" />
								</div>
								<div className="space-y-4 mb-22">
									<h3 className="font-bold text-2xl text-[#101727]">
										Choose Products
									</h3>
									<p className="font-normal text-base text-[#627382]">
										Browse our catalog and select the tools that fit your needs.
									</p>
								</div>
							</div>
							<div className="w-95 border-2 border-[#f1f1f1] rounded-2xl p-6 relative">
								<span className=" w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white inline-flex items-center justify-center font-bold text-sm absolute top-5 right-5">
									03
								</span>
								<div className="w-25 h-25 rounded-full bg-linear-to-r from-[#4F39F6]/10 to-[#9514FA]/10 border-2 border-[#f1f1f1] inline-flex items-center justify-center mb-6 mt-22">
									<img src={rocketImg} alt="rocket" />
								</div>
								<div className="space-y-4 mb-22">
									<h3 className="font-bold text-2xl text-[#101727]">
										Start Creating
									</h3>
									<p className="font-normal text-base text-[#627382]">
										Download and start using your premium tools immediately.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Steps;
