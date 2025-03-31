import React from "react";
import useStore from "../../../../zustandStore";
import { Rate } from "antd";

function ClientsTestimonies() {
	const { pageColors } = useStore();

	return (
		<div className="flex flex-col gap-6 bg-white m-auto p-4 rounded-md w-80">
			<div>
				<Rate disabled defaultValue={4} />
			</div>
			<div>
				<h4 className="font-bold text-lg">We have No regret</h4>
				<p className="pt-2 text-sm">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum iusto
					dolorem cupiditate, odio vel earum saepe
				</p>
			</div>
			<div className="flex items-center gap-4">
				<div
					style={{ backgroundColor: pageColors.secundario }}
					className="float-left bg-contain rounded-b-full rounded-l-full rounded-tr-md w-16 h-16 overflow-hidden"
				>
					<img
						src="https://files.softicons.com/download/business-icons/azuline!-business-icons-by-iconleak/png/256x256/5.png"
						alt=""
						className="p-1 h-16"
					/>
				</div>
				<div className="flex flex-col">
					<p className="text-lg">Raul venavides</p>
					<i>raul@gmail.com.ar</i>
				</div>
			</div>
		</div>
	);
}

export default ClientsTestimonies;
