import React from "react";
import bannerImg from "../../assets/banner.png";
import playIcon from "../../assets/Play.png";

const Banner = () => {
	return (
		<>
			<div className="hero min-h-screen px-0 max-w-300 mx-auto py-21.25">
				<div className="hero-content flex-col lg:flex-row-reverse px-0 gap-15">
					<img src={bannerImg} className="max-w-lg rounded-lg" />
					<div>
						<button className="btn bg-[#E1E7FF] rounded-full mb-4">
							<div className="w-4 h-4 bg-linear-to-r from-[#4F39F6]/15 to-[#9514FA]/15 rounded-full flex items-center justify-center">
								<div className="w-3 h-3 bg-linear-to-r from-[#4F39F6]/40 to-[#9514FA]/40 rounded-full flex items-center justify-center">
									<div className="w-2 h-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full"></div>
								</div>
							</div>
							<span className="font-medium text-base bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent leading-normal ml-1.25">
								New: AI-Powered Tools Available
							</span>
						</button>
						<h1 className="text-[4.5rem] font-extrabold leading-21">
							Supercharge Your Digital Workflow
						</h1>
						<p className="py-6 font-normal text-lg text-[#627382] w-141 mt-4 mb-8">
							Access premium AI tools, design assets, templates, and
							productivity software—all in one place. Start creating faster
							today. Explore Products
						</p>
						<div className="flex gap-4 items-center">
							<button className="btn px-4 py-3.75 font-bold text-normal text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-linear-to-r hover:from-[#9514FA] hover:to-[#4F39F6] transition duration-300 ease-in-out">
								Get Started
							</button>
							<div className="w-40 h-10 p-px font-bold text-normal rounded-full text-[#101727] bg-linear-to-r from-[#4F39F6] to-[#9514FA] cursor-pointer">
								<div className="w-full h-full bg-white rounded-full">
									<span className="flex items-center gap-2 justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent w-full h-full rounded-full">
										<img src={playIcon} alt="" />
										Watch Demo
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
