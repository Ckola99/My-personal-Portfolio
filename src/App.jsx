import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { FaArrowUp } from "react-icons/fa";

export default function App() {
	return (
		<div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 no-scrollbar">
			<div className="fixed top-0 -z-10 h-full w-full">
				<div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
			</div>

			<div className="container mx-auto px-8 ">
				<Navbar />
				<Hero />
				<About />
				<Technologies />
				<Projects />
				<Contact />
				<div className="flex items-center justify-center my-4">
					<a
						href="#top"
						className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-700 hover:bg-neutral-600"
					>
						<FaArrowUp className="text-xl text-neutral-300" />
					</a>
				</div>
			</div>
		</div>
	);
}
