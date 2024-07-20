import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
	initial: { y: -10 },
	animate: {
		y: [10, -10],
		transition: {
			duration: duration,
			ease: "linear",
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
});

const Technologies = () => {
	return (
		<div className="pb-8">
			<motion.h2
				whileInView={{ opacity: 1, y: 0}}
				initial={{ opacity: 0, y: -100}}
				transition={{ duration: 1.5}}
				className="my-20 text-center text-4xl">
				Technologies
			</motion.h2>
			<motion.div
				whileInView={{ opacity: 1, x: 0}}
				initial={{opacity: 0, x:-100}}
				transition={{duration: 1}}
				className="flex flex-wrap items-center justify-center gap-4">
				<motion.div
					variants={iconVariants(2)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-4"
				>
					<RiReactjsLine className="text-7xl text-cyan-400" />
				</motion.div>
				<motion.div
					variants={iconVariants(5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-4"
				>
					<RiTailwindCssFill className="text-7xl text-cyan-500" />
				</motion.div>
				<motion.div
					variants={iconVariants(2.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-4"
				>
					<SiRedux className="text-7xl text-purple-600" />
				</motion.div>
				<motion.div
					variants={iconVariants(7)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-4"
				>
					<SiReactrouter className="text-7xl text-red-600" />
				</motion.div>
				<motion.div
					variants={iconVariants(4)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-4"
				>
					<FaGitAlt className="text-7xl text-red-600" />
				</motion.div>
				<motion.div
					variants={iconVariants(3.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-4"
				>
					<FaGithub className="text-7xl" />
				</motion.div>
				<motion.div
					variants={iconVariants(7)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-4"
				>
					<FaCss3Alt className="text-7xl text-blue-500" />
				</motion.div>
				<motion.div
					variants={iconVariants(5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-4"
				>
					<FaHtml5 className="text-7xl text-orange-600" />
				</motion.div>
			</motion.div>
		</div>
	);
};
export default Technologies;
