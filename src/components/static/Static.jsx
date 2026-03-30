import React from "react";

const Static = () => {
	return (
		<>
			<div className="py-15 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
				<div className="max-w-300 mx-auto grid grid-cols-3">
					<div className="flex-1 text-center relative after:content-[''] after:absolute after:right-0 after:top-[20%] after:h-[60%] after:w-0.5 after:bg-white/40">
						<h2 className="font-extrabold text-6xl text-white my-3">50K+</h2>
						<p className="font-medium text-2xl text-white/80">Active Users</p>
					</div>

					<div className="flex-1 text-center relative after:content-[''] after:absolute after:right-0 after:top-[20%] after:h-[60%] after:w-0.5 after:bg-white/40">
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
