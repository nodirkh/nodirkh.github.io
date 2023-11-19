import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";

const src = "https://avatars.githubusercontent.com/u/76552292?v=4";

const About = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div className="w-full h-screen py-16">
				<div className="w-full h-screen mx-auto p-4 content-center">
					<div className="max-w-2xl mx-auto">
						<div className="mb-10">
							<img
								src={src}
								alt="Profile picture"
								width={200}
								height={200}
								className="w-[200px] h-[200px] rounded-full mx-auto"
							/>
						</div>
						<p className="mb-4 text-2xl font-extralight">
							I am a CS graduate from{" "}
							<Link href="https://www.timeshighereducation.com/world-university-rankings/ulsan-national-institute-science-and-technology-unist" target="blank">
								<span className="uppercase text-[#00bcea] hover:underline">
									UNIST
								</span>
							</Link>
							, with specialization in Software Engineering and Deep Learning.
						</p>
						<p className="mb-4 text-2xl font-extralight">
							During my tenure at UNIST, I delved into the core of Computer
							Science, mastering courses in Data Structures, Algorithms, System
							Programming and Computer Networks. I have found my great interest
							in computer security when I was a sophomore at college, and worked
							under{" "}
							<Link href="https://www.ysjeon.net/" target="blank">
								<span className="text-[#00bcea] hover:underline">
									Prof. Yuseok Jeon
								</span>
							</Link>
							. Our research focused on developing a novel fuzzing technique for
							directed greybox fuzzing. I have learned invaluable lessons from
							Prof. Jeon, and I am forever grateful for his guidance.
						</p>
						<p className="mb-4 text-2xl font-extralight">
							By the end of my senior year, I have explored the field of Deep
							Learning and Computer Vision by taking an introductory course from{" "}
							<Link href="https://sites.google.com/site/bsrvision00/" target="blank">
								<span className="text-[#00bcea] hover:underline">
									Prof. Seungryul Baek
								</span>
							</Link>
							. I have also worked under Prof. Seungryul Baek as a research
							assistant, and together we have published a paper at{" "}
							<Link href="https://nips.cc/" target="blank">
								<span className="text-[#00bcea] hover:underline">NeurIPS</span>
							</Link>{" "}
							2023 conference workshop.
						</p>
                        <p className="mb-4 text-2xl font-extralight">
							Feel free to{" "}
							<Link href="mailto:nodirkhujaev@gmail.com">
								<span className="text-[#00bcea] hover:underline">
									email
								</span>
							</Link>
							{" "} me about anything!
						</p>
					</div>
					<Footer></Footer>
				</div>
			</div>
		</div>
	);
};

export default About;
