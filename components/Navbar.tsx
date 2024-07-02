"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	const close = () => {
		setShowMenu(!showMenu);
	};
	const pathname = usePathname();
	return (
		<div className="fixed w-full h-20 z-[100] bg-[#ecf0f3]">
			<div className="flex md:justify-center justify-between items-center w-full h-full px-2 2xl:px-16">
				<div>
					<Link href="/">
						<h3 className="hover:text-[#00bcea]">nodirkh</h3>
					</Link>
				</div>
				<div>
					<ul className="hidden md:flex">
						<Link href="/about">
							<li
								className={`ml-10 hover:text-[#00bcea] text-sm uppercase hover:border-b ${
									pathname == "/about" ? "text-[#00bcea]" : ""
								}`}
							>
								About
							</li>
						</Link>
						{/* <Link href="/projects">
							<li
								className={`ml-10 hover:text-[#00bcea] text-sm uppercase hover:border-b ${
									pathname == "/projects" ? "text-[#00bcea]" : ""
								}`}
							>
								Projects
							</li>
						</Link> */}
						{/* <Link href="/contact">
							<li
								className={`ml-10 hover:text-[#00bcea] text-sm uppercase hover:border-b ${
									pathname == "/contact" ? "text-[#00bcea]" : ""
								}`}
							>
								Contact
							</li>
						</Link> */}
						<Link href="https://drive.google.com/drive/u/2/folders/1YSIDnykElEGq9MTTEVgsuGqViraNfEoG" target="blank">
							<li className="ml-10 hover:text-[#00bcea] text-sm uppercase hover:border-b">
								CV
							</li>
						</Link>
						<Link
							href="https://www.linkedin.com/in/nodirkhujaev/"
							target="blank"
						>
							<li className="ml-10 hover:text-[#00bcea] text-sm uppercase hover:border-b">
								LinkedIn
							</li>
						</Link>
						<Link href="https://www.github.com/nodirkh" target="blank">
							<li className="ml-10 hover:text-[#00bcea] text-sm uppercase hover:border-b">
								GitHub
							</li>
						</Link>
					</ul>
				</div>
				<div className="md:hidden cursor-pointer" onClick={close}>
					<AiOutlineMenu size={25} />
				</div>
			</div>
			<div
				className={
					showMenu
						? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
						: ""
				}
			>
				<div
					className={
						showMenu
							? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<h2 className="hover:text-[#00bcea] ease-in duration-150">
								nodirkh
							</h2>
							<div onClick={close} className="p-3 cursor-pointer">
								<AiOutlineClose size={25} />
							</div>
						</div>
					</div>
					<div className="py-4 flex flex-col pt-8">
						<ul className="uppercase">
						<Link href="/">
								<li
									className={`ml-10 hover:text-[#00bcea] uppercase hover:border-b ${
										pathname == "/" ? "text-[#00bcea]" : ""
									}`}
								>
									Home
								</li>
							</Link>
							<Link href="/about">
								<li
									className={`ml-10 hover:text-[#00bcea] uppercase hover:border-b ${
										pathname == "/about" ? "text-[#00bcea]" : ""
									}`}
								>
									About
								</li>
							</Link>
							{/* <Link href="/projects">
								<li
									className={`ml-10 hover:text-[#00bcea] uppercase hover:border-b ${
										pathname == "/projects" ? "text-[#00bcea]" : ""
									}`}
								>
									Projects
								</li>
							</Link> */}
							{/* <Link href="/">
								<li
									className={`ml-10 hover:text-[#00bcea] uppercase hover:border-b ${
										pathname == "/contact" ? "text-[#00bcea]" : ""
									}`}
								>
									Contact
								</li>
							</Link> */}
							<Link href="https://drive.google.com/file/d/14T-GWKpuVKUTi5t3r1TtehNKfVaoT2sp/view?usp=sharing" target="blank">
								<li className="ml-10 hover:text-[#00bcea] uppercase hover:border-b">
									CV
								</li>
							</Link>
							<Link
								href="https://www.linkedin.com/in/nodirkhujaev/"
								target="blank"
							>
								<li className="ml-10 hover:text-[#00bcea] uppercase hover:border-b">
									LinkedIn
								</li>
							</Link>
							<Link href="https://www.github.com/nodirkh" target="blank">
								<li className="ml-10 hover:text-[#00bcea] uppercase hover:border-b">
									GitHub
								</li>
							</Link>
						</ul>
						<div className="pt-40">
							<span className="uppercase tracking-widest text-black">
								Connect with me
							</span>
							<div className="flex items-center justify-between my-4 sm:[80%]">
								<div>
									<Link
										href="https://www.linkedin.com/in/nodirkhujaev/"
										target="blank"
									>
										<FaLinkedin size={25}></FaLinkedin>
									</Link>
								</div>
								<div>
									<Link href="https://www.github.com/nodirkh" target="blank">
										<FaGithub size={25}></FaGithub>
									</Link>
								</div>
								<div>
									<Link href="mailto:nodirkhujaev@gmail.com">
										<AiOutlineMail size={25}></AiOutlineMail>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
