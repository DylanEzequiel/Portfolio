import useStore from "../../../zustandStore";
import { BsTranslate } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Header() {
	const lang = useStore((state) => state.language);
	const switchFunction = useStore((state) => state.switchLanguage);
	function handleClick() {
		if (lang == "eng") {
			switchFunction("esp");
		} else {
			switchFunction("eng");
		}
	}

	return (
		<header className="top-0 z-50 sticky bg-#0e0f1ff9 shadow-2xl shadow-black backdrop-blur-sm w-full">
			<div className="flex flex-row justify-between items-center space-x-4 m-auto max-w-[1400px] font-semibold text-center">
				<button
					className="flex flex-col justify-center p-2 font-semibold text-gray-200 text-center"
					onClick={handleClick}
				>
					<motion.div initial>
						<BsTranslate
							className="self-center hover:rotate-6 active:rotate-[360deg] duration-200"
							size={25}
						/>
					</motion.div>
				</button>
				<div>
					<ul className="flex flex-row gap-4 text-md text-white">
						<li className="p-4 select-none">
							<Link
								className="hover:underline transition-all duration-200"
								to={"/"}
							>
								home
							</Link>
						</li>
						<li className="p-4 select-none">
							<Link
								className="hover:underline transition-all duration-200"
								to={"/FrameSelector"}
							>
								Frames
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;
