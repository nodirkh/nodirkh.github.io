import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import Footer from "./Footer";

const Main = () => {
	return (
		<div className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-[80%] mx-auto p-2 flex justify-center items-center">
				<div>
					<h1 className="py-4 text-gray-700">
						Hi! It&rsquo;s <span className="text-[#00bcea]">Nodir</span>
					</h1>
					<h1 className="py-1 text-gray-700">A Software Engineer</h1>
					<p className="py-1 text-gray-600 w-[70%] m-auto font-light">
						I&rsquo;m a Software Engineer with a Bachelor&rsquo;s in Computer
						Science from UNIST. My expertise spans across various facets of CS,
						including low-level programming, AI & Deep Learning, and full-stack
						web development. Learn more about{" "}
						<Link href="/about">
							<span className="text-[#00bcea] underline">me</span>.
						</Link>
					</p>
					<p className="text-gray-600 font-light">
						Let&rsquo;s explore the possibilities together!
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						<div>
							<Link href="https://www.linkedin.com/in/nodirkhujaev/" target="blank">
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
			<Footer></Footer>
		</div>
	);
};

export default Main;
