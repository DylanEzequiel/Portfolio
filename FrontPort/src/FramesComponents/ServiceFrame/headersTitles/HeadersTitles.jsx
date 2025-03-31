import React from "react";
import useStore from "../../../../zustandStore";

function HeadersTitles({ type, title, desc }) {
	const { pageColors } = useStore();

	return (
		<header className="m-auto pt-20 max-w-[70rem]">
			<i className="font-medium text-lg">
				<span className="font-bold" style={{ color: pageColors.principal }}>
					---
				</span>
				{type}
			</i>
			<div className="flex flex-row justify-between items-start pt-10">
				<div>
					<h3 className="font-semibold text-xl md:text-3xl">{title}</h3>
				</div>
				{desc && (
					<p className="w-[25rem] font-normal text-sm md:text-base text-right">
						{desc}
					</p>
				)}
			</div>
		</header>
	);
}

export default HeadersTitles;
