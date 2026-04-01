import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import digiToolFooterLogo from "../../assets/DigiToolsFooter.png";

const Footer = () => {
	return (
		<>
			<div className="bg-[#101727] pt-30 pb-20">
				<footer className="footer sm:footer-horizontal p-10 max-w-300 mx-auto px-5 md:px-0">
					<aside>
						<img src={digiToolFooterLogo} alt="DigiTool Footer Logo" />
						<p className="font-normal text-base text-white/80 mt-4">
							Premium digital tools for creators, <br /> professionals, and
							businesses. Work smarter <br /> with our suite of powerful tools.
						</p>
					</aside>
					<nav className="space-y-4">
						<h6 className="footer-title text-[#ffffff] font-medium text-[1.25rem]">
							Product
						</h6>
						<a className="link link-hover text-white/80">Features</a>
						<a className="link link-hover text-white/80">Pricing</a>
						<a className="link link-hover text-white/80">Templates</a>
						<a className="link link-hover text-white/80">Integrations</a>
					</nav>
					<nav className="space-y-4">
						<h6 className="footer-title text-white font-medium text-[1.25rem]">
							Company
						</h6>
						<a className="link link-hover text-white/80">About</a>
						<a className="link link-hover text-white/80">Blog</a>
						<a className="link link-hover text-white/80">Careers</a>
						<a className="link link-hover text-white/80">Press</a>
					</nav>
					<nav className="space-y-4">
						<h6 className="footer-title text-white font-medium text-[1.25rem]">
							Resources
						</h6>
						<a className="link link-hover text-white/80">Documentation</a>
						<a className="link link-hover text-white/80">Help Center</a>
						<a className="link link-hover text-white/80">Community</a>
						<a className="link link-hover text-white/80">Contact</a>
					</nav>
					<nav className="">
						<h6 className="footer-title text-white font-medium text-[1.25rem]">
							Social Links
						</h6>
						<div className="flex space-x-4 mt-4">
							<a
								className="link link-hover w-10 h-10 flex items-center justify-center rounded-full bg-white text-black"
								href="https://www.instagram.com/digitools"
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiFillInstagram />
							</a>
							<a
								className="link link-hover w-10 h-10 flex items-center justify-center rounded-full bg-white text-black"
								href="https://www.facebook.com/digitools"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaSquareFacebook />
							</a>
							<a
								className="link link-hover w-10 h-10 flex items-center justify-center rounded-full bg-white text-black"
								href="https://twitter.com/digitools"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaXTwitter />
							</a>
						</div>
					</nav>
				</footer>
				<hr className="border-[#333333] max-w-300 mx-auto mt-10" />
				<div className="max-w-300 mx-auto px-0 flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-center mt-7.5">
					<p className="text-center text-[#fafafa]/50">
						&copy; 2024 DigiTools. All rights reserved.
					</p>
					<ul className="flex flex-col md:flex-row gap-7.5">
						<li>
							<a href="" className="text-[#fafafa]/50">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="" className="text-[#fafafa]/50">
								Terms of Service
							</a>
						</li>
						<li>
							<a href="" className="text-[#fafafa]/50">
								Cookies
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Footer;
