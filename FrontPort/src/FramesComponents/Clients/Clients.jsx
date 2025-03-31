import React from "react";
import useStore from "../../../zustandStore";

function Clients() {
	const { pageColors } = useStore();

	return (
		<div
			className="flex flex-row justify-around items-center self-center backdrop-blur-sm m-auto my-10 w-full max-w-[58rem]"
			style={{
				backgroundColor: pageColors.terciario,
			}}
		>
			<div className="flex flex-col gap-4">
				<h3 className="font-semibold text-xl">
					Lets Create Something Together!
				</h3>
				<button
					className="px-3 py-1 rounded-md w-max text-md"
					style={{ backgroundColor: pageColors.principal }}
				>
					Contact Us!
				</button>
			</div>
			<div className="flex flex-row bg-white/10 backdrop-blur-lg m-8 rounded-md gap">
				<div className="p-4">
					<p className="font-bold text-3xl text-center">+40</p>
					<i>Satisfied Clients</i>
				</div>
				<div className="p-4 border-x-2 border-x-slate-300">
					<p className="font-bold text-3xl text-center">+5</p>
					<i>Years of Experience</i>
				</div>
				<div className="p-4">
					<p className="font-bold text-3xl text-center">+20</p>
					<i>Completed proyects</i>
				</div>
			</div>
		</div>
	);
}

export default Clients;
