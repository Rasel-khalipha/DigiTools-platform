import React from "react";

const CallToAction = () => {
	return (
		<>
			<div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-30">
				<div className="max-w-300 mx-auto text-center">
					<div>
						<h2 className="font-extrabold text-[2.5rem] mb-4">
							Ready to Transform Your Workflow?
						</h2>
						<p className="font-normal text-base text-white/90 mb-10">
							Join thousands of professionals who are already using Digitools to
							work smarter.
							<br />
							Start your free trial today.
						</p>
					</div>
					<div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-4">
						<div className="w-40.75 py-3.75 px-4 bg-white rounded-full cursor-pointer">
							<span className="flex items-center gap-2 justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent w-full h-full rounded-full">
								Explore Products
							</span>
						</div>

						<button className="w-40.75 py-3.75 px-4 border-2 border-white rounded-full cursor-pointer">
							View Pricing
						</button>
					</div>
					<div>
						<p className="font-normal text-base text-white/80">
							14-day free trial • No credit card required • Cancel anytime
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default CallToAction;
