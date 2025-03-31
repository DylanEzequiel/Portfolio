import React from "react";
import { Link } from "react-router-dom";
import useStore from "../../../zustandStore";

function Error() {
	const lang = useStore((state) => state.language);
	return (
		<div className="flex flex-col justify-center items-center min-h-screen text-white">
			<h1 className="text-4xl">Opps!</h1>
			<div className="flex flex-col justify-center items-center">
				<img
					src="https://miro.medium.com/v2/resize:fit:512/1*YWUpnY_zNbSfK62GSJIBbw.png"
					alt="Error Icon"
					className="w-72 h-72"
				/>
				<h3>
					{lang == "eng"
						? "we cannot find the page you are looking for right now!"
						: "No pudimos encontrar la pagina que estas buscando!"}
				</h3>
				<Link
					to={"/"}
					className="flex justify-center gap-1 bg-indigo-900/40 hover:bg-indigo-900 m-2 px-4 py-1 rounded-md font-semibold text-white hover:scale-105 duration-150"
				>
					{lang == "eng" ? "Go back home" : "Volver"}
				</Link>
			</div>
		</div>
	);
}

export default Error;
