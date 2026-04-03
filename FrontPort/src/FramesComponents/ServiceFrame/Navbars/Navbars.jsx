import React from "react";
import useStore from "../../../../zustandStore";
import { FaOpencart } from "react-icons/fa";
import { PiUser } from "react-icons/pi";
import { RiChatSmileAiLine } from "react-icons/ri";
import { MdOutlineSearch } from "react-icons/md";
import { GiMeltingIceCube } from "react-icons/gi";
function NavbarService() {
	const { pageColors } = useStore();
	return (
		<header
			style={{ backgroundColor: pageColors.secundario, color: pageColors.text }}
			className="z-40 fixed flex flex-row justify-between items-center shadow-black/50 shadow-md px-2 w-full h-14"
		>
			<div className="pl-4 font-bold text-xl">
				<span style={{ color: pageColors.principal }}>Logo</span>
				here
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

function NavbarEccomerce() {
	const { pageColors } = useStore();

	return (
		<div>
			<header
				style={{
					backgroundColor: pageColors.secundario,
					color: pageColors.text,
				}}
				className="z-40 fixed flex flex-row justify-between items-center shadow-black/50 shadow-md px-4 w-full h-14"
			>
				<div
					style={{
						backgroundColor: pageColors.background,
					}}
					className="items-center p-1 rounded-md font-bold text-3xl"
				>
					<span
						style={{
							color: pageColors.text,
						}}
					>
						<GiMeltingIceCube />
					</span>
				</div>

				<div>
					<ul className="flex flex-row gap-4 font-semibold text-lg">
						<li className="opacity-80 hover:opacity-100 transition-all duration-200 cursor-pointer">
							Best Sellers
						</li>
						<li className="opacity-80 hover:opacity-100 transition-all duration-200 cursor-pointer">
							5 Stars
						</li>
						<li className="opacity-80 hover:opacity-100 transition-all duration-200 cursor-pointer">
							Categories
						</li>
					</ul>
				</div>
				<div className="flex flex-row items-center bg-white px-1 rounded-full">
					<input
						type="text"
						placeholder="Bushcraft equipment"
						className="border-none focus:border-none rounded-full focus:outline-none focus:ring-0 text-black"
					></input>
					<div
						style={{
							backgroundColor: pageColors.terciario,
						}}
						className="p-2 rounded-full"
					>
						<MdOutlineSearch size={20} className="" />
					</div>
				</div>
				<div>
					<ul className="flex flex-row gap-6 font-semibold text-lg">
						<li className="flex flex-row items-center gap-2 opacity-80 hover:opacity-100 transition-all duration-200 cursor-pointer">
							<PiUser size={30} />
						</li>
						<li className="opacity-80 hover:opacity-100 transition-all duration-200 cursor-pointer">
							<RiChatSmileAiLine size={30} />
						</li>
						<li className="opacity-80 hover:opacity-100 transition-all duration-200 cursor-pointer">
							<FaOpencart size={30} />
						</li>
					</ul>
				</div>
			</header>
			<div></div>
		</div>
	);
}

export { NavbarService, NavbarEccomerce };
