import React from "react";
import { FaChartPie } from "react-icons/fa";
import useStore from "../../../../zustandStore";

function S_MoreFeat() {
	const { pageColors } = useStore();
	return (
		<div
			style={{ borderColor: pageColors.principal }}
			className="p-2 px-8 border-2 border-solid rounded-md"
		>
			<div className="flex flex-row items-center gap-4">
				<FaChartPie size={30} style={{ color: pageColors.principal }} />
				<h4 className="font-semibold text-2xl">New Super Feature</h4>
			</div>
			<p className="text-md">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
		</div>
	);
}

export default S_MoreFeat;
