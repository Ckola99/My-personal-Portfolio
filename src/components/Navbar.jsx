import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";



const Navbar = () => {
	return (
		<nav id="top" className=" mb-10 flex items-center justify-between py-6">
			<div className="flex flex-shrink-0 items-center">
				<h1 className="mx-2 w-10 text-2xl hover:text-purple-900 hover:cursor-pointer" href="#">
					CK
				</h1>
			</div>
			<div className="m-8 flex items-center justify-center gap-4 text-2xl">
				<a
					href="https://www.linkedin.com/in/christopher-k-b64b35119/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin />
				</a>
				<a href="https://github.com/Ckola99/" target="_blank" rel="noopener noreferrer">
					<FaGithub />
				</a>
				<a href="http://twitter.com/KolaDev01" target="_blank" rel="noopener noreferrer">
					<FaXTwitter />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
