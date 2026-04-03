import useStore from "../../../zustandStore";
import { BsTranslate } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
	const lang = useStore((state) => state.language);
	const switchFunction = useStore((state) => state.switchLanguage);
	const [display, setDisplay] = useState(false);

	return (
		<header className="top-0 z-50 sticky bg-#0e0f1ff9 shadow-2xl shadow-black backdrop-blur-sm w-full">
			<div  className="flex flex-row justify-between items-center space-x-4 m-auto max-w-[1400px] font-semibold text-center">
				<div  className="flex flex-col justify-center p-2 font-semibold text-gray-200 text-center">
					<div  className="">
						<BsTranslate
							className="self-center hover:rotate-6 active:rotate-[36deg] duration-200"
							size={25}
							onClick={() => setDisplay(!display)}
							onMouseEnter={()=>setDisplay(true)}
						/>
						{display && (
							<motion.div
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: 1,
									scale: 1,
									duration: 3,
									transition: "ease-in-out",
								}}
								onMouseLeave={()=>setDisplay(false)}
								className={` absolute bg-gray-600/20 mt-4 px-4 py-2 rounded-sm min-w-32`}
							>
								<ul className="flex flex-col gap-2 text-md">
									<li
										
										className={` flex ${
											lang == "esp"
												? "text-white"
												: "text-gray-400 opacity-90 hover:opacity-100 hover:text-gray-200"
										} flex-row items-center gap-2  hover:cursor-pointer`}
										onClick={() => {
						
											switchFunction("esp");
										}}
									>
										<span className={`font-bold ${lang == "esp"
												? "text-green-500"
												: "text-gray-400/30"}`}>•</span>
										Español
									</li>
									<li
										className={` flex ${
											lang == "eng"
												? "text-white"
												: "text-gray-400 opacity-90 hover:opacity-100 hover:text-gray-200"
										} flex-row items-center gap-2  hover:cursor-pointer`}
										onClick={() => {
											switchFunction("eng");
										}}
									>
										<span className={`font-bold ${lang == "eng"
												? "text-green-500"
												: "text-gray-400/30"}`}>•</span>
										English
									</li>
								</ul>
							</motion.div>
						)}
					</div>
				</div>
				<div className="flex flex-row flex-1">
					<h3 className="text-white text-xl">
						Dylan Correa
					</h3>
					
				</div>
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
