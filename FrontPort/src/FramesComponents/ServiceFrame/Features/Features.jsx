import React from "react";
import { FaChartPie, FaLaptopCode } from "react-icons/fa";
import { MdWifiTethering } from "react-icons/md";
import useStore from "../../../../zustandStore";
import { motion } from "framer-motion";

function Features() {
	const { pageColors } = useStore();

	return (
		<article className="py-10">
			<main className="font-semibold text-4xl text-center">
				<h2>Our best features </h2>
			</main>
			<aside className="flex lg:flex-row flex-col justify-center items-center gap-6 pt-20">
				<motion.div
					initial={{ opacity: 0, y: 150 }}
					whileInView={{
						y: 0,
						opacity: 1,
						scale: 1,
						duration: 3,
						transition: "ease-in-out",
					}}
					viewport={{ once: true }}
					whileHover={{ scale: 1.05 }}
					className="flex flex-col items-center gap-2 px-4 pt-4 rounded-md w-80 text-center hover:scale-105 duration-200"
					style={{ backgroundColor: pageColors.terciario }}
				>
					<MdWifiTethering size={40} />
					<h3 className="font-semibold text-2xl">Conection everywhere</h3>
					<i className="py-4 text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
						incidunt tenetur veritatis
					</i>
					<button
						style={{ backgroundColor: pageColors.secundario }}
						className="shadow-black/60 shadow-md px-6 py-2 rounded-lg w-max font-semibold text-md hover:scale-105 duration-200"
					>
						Learn more
					</button>
					<img
						src="https://niceillustrations.com/wp-content/uploads/2021/07/Connection-Lost-color-800px.png"
						alt=""
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{
						y: 0,
						opacity: 1,
						scale: 1,
						duration: 3,
						transition: "ease-in-out",
					}}
					viewport={{ once: true }}
					whileHover={{ scale: 1.05 }}
					className="flex flex-col items-center gap-2 px-4 pt-4 rounded-md w-80 text-center hover:scale-105 duration-200"
					style={{ backgroundColor: pageColors.principal }}
				>
					<FaLaptopCode size={40} />
					<h3 className="font-semibold text-2xl">Easy Access</h3>
					<i className="py-4 text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
						incidunt tenetur veritatis
					</i>
					<button
						style={{ backgroundColor: pageColors.secundario }}
						className="shadow-black/60 shadow-md px-6 py-2 rounded-lg w-max font-semibold text-md hover:scale-105 duration-200"
					>
						Learn more
					</button>
					<img
						src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--login-enter-log-cyber-protection-nallow-pack-people-illustrations-6983270.png?f=webp"
						alt=""
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 150 }}
					whileInView={{
						y: 0,
						opacity: 1,
						scale: 1,
						duration: 3,
						transition: "ease-in-out",
					}}
					viewport={{ once: true }}
					whileHover={{ scale: 1.05 }}
					className="flex flex-col items-center gap-2 px-4 pt-4 rounded-md w-80 text-center hover:scale-105 duration-200"
					style={{ backgroundColor: pageColors.terciario }}
				>
					<FaChartPie size={40} />
					<h3 className="font-semibold text-2xl">Chart Projection</h3>
					<i className="py-4 text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
						incidunt tenetur veritatis
					</i>
					<button
						style={{ backgroundColor: pageColors.secundario }}
						className="shadow-black/60 shadow-md px-6 py-2 rounded-lg w-max font-semibold text-md hover:scale-105 duration-200"
					>
						Learn more
					</button>
					<img
						src="https://cdni.iconscout.com/illustration/premium/thumb/boy-showing-loading-data-illustration-download-in-svg-png-gif-file-formats--computer-progress-bar-computing-pack-network-communication-illustrations-11108542.png?f=webp"
						alt=""
					/>
				</motion.div>
			</aside>
		</article>
	);
}

export default Features;
