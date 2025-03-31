import React from "react";
import useStore from "../../../../zustandStore";

function NavbarService() {
	const { pageColors } = useStore();

	return (
		<header
			style={{ backgroundColor: pageColors.secundario, color: pageColors.text }}
			className="z-40 fixed flex flex-row justify-between items-center shadow-black/50 shadow-md px-2 w-full h-14"
		>
			<div className="pl-4 font-bold text-xl">
				<span style={{ color: pageColors.principal }}>logo</span>here
			</div>

			<div>
				<ul className="flex flex-row gap-4 font-semibold text-lg">
					<li className="opacity-80 hover:opacity-100 hover:underline transition-all duration-200 cursor-pointer">
						Home
					</li>
					<li className="opacity-80 hover:opacity-100 hover:underline transition-all duration-200 cursor-pointer">
						Services
					</li>
					<li className="opacity-80 hover:opacity-100 hover:underline transition-all duration-200 cursor-pointer">
						Contact
					</li>
					{/* <li className="opacity-80 hover:opacity-100 hover:underline transition-all duration-200 cursor-pointer">
						About
					</li> */}
					<li
						style={{ backgroundColor: `${pageColors.principal}` }}
						className="opacity-60 hover:opacity-100 px-4 rounded-l-lg rounded-tr-lg hover:underline transition-all duration-200 cursor-pointer"
					>
						<p className="">Join Us</p>
					</li>
				</ul>
			</div>
		</header>
	);
}

export { NavbarService };
