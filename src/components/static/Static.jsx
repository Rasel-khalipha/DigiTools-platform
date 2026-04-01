import React from "react";

const Static = () => {
	return (
		<>
			<div className="py-15 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
				<div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="flex-1 text-center relative lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-[20%] lg:after:h-[60%] lg:after:w-0.5 lg:after:bg-white/40">
						<h2 className="font-extrabold text-6xl text-white my-3">50K+</h2>
						<p className="font-medium text-2xl text-white/80">Active Users</p>
					</div>

					<div className="flex-1 text-center relative lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-[20%] lg:after:h-[60%] lg:after:w-0.5 lg:after:bg-white/40">
						<h2 className="font-extrabold text-6xl text-white my-3">200+</h2>
						<p className="font-medium text-2xl text-white/80">Premium Tools</p>
					</div>

					<div className="flex-1 text-center">
						<h2 className="font-extrabold text-6xl text-white my-3">4.9</h2>
						<p className="font-medium text-2xl text-white/80">Rating</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Static;
