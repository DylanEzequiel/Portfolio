import { ColorPicker } from "antd";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

import { LuPencilRuler } from "react-icons/lu";
import { motion } from "framer-motion";
import useStore from "../../../zustandStore";

function ColorSelector() {
	const [open, setOpen] = useState(false);
	const { pageColors, setColors, language } = useStore();

	function handleColorChange(e, name) {
		setColors(e.toHexString(), name);
	}

	return (
		<div className="z-50 fixed flex flex-row-reverse w-max">
			<motion.div
				initial={{ x: 0 }}
				animate={{ x: open ? 180 : 0, duration: 0.2, transition: "spring" }}
				onClick={() => setOpen(!open)}
				className={`  bg-white/60 backdrop-blur-sm h-max py-2 hover:cursor-pointer  absolute left-0 top-4 z-50 rounded-r-md   w-max ${
					open ? "" : "hover:scale-105 ml-0  "
				}`}
			>
				<IoIosArrowBack
					size={20}
					className={`${open ? "" : "rotate-180"} duration-200`}
				/>
			</motion.div>
			<motion.div
				initial={{ x: -180 }}
				animate={{
					x: open ? 0 : -180,
					duration: 0.2,
					transition: "spring",
				}}
				className={`bg-white/60 backdrop-blur-sm  rounded-r-md p-4 w-[180px] h-screen `}
			>
				<ul className="gap-2 font-semibold">
					<li>
						<p>{language == "eng" ? "Main" : "Primario"}</p>
						<ColorPicker
							id="principal"
							defaultValue={pageColors.principal}
							onChange={(e) => handleColorChange(e, "principal")}
							size="small"
							showText
						/>
					</li>
					<li>
						<p>{language == "eng" ? "Secondary" : "Secundario"}</p>
						<ColorPicker
							id="secundario"
							defaultValue={pageColors.secundario}
							onChange={(e) => handleColorChange(e, "secundario")}
							size="small"
							showText
						/>
					</li>
					<li>
						<p>{language == "eng" ? "Third" : "Terciario"}</p>
						<ColorPicker
							id="terciario"
							defaultValue={pageColors.terciario}
							onChange={(e) => handleColorChange(e, "terciario")}
							size="small"
							showText
						/>
					</li>
					<li>
						<p>Background</p>
						<ColorPicker
							id="background"
							defaultValue={pageColors.background}
							onChange={(e) => handleColorChange(e, "background")}
							size="small"
							showText
						/>
					</li>
					<li>
						<p>{language == "eng" ? "text" : "texto"}</p>
						<ColorPicker
							id="text"
							defaultValue={pageColors.text}
							onChange={(e) => handleColorChange(e, "text")}
							size="small"
							showText
						/>
					</li>
				</ul>
			</motion.div>
		</div>
	);
}

export default ColorSelector;
