import React from "react";
import { PiCopyright } from "react-icons/pi";

const Footer = () => {
	return (
		<footer className="w-full border-t bg-[#ecf0f3] p-4 mt-10">
			<div className="flex text-center items-center justify-center">
				<div className="mr-2">
					<PiCopyright></PiCopyright>
				</div>
				<div>
					<p>Nodir Khujaev</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
