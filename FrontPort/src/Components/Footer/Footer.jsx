import useStore from "../../../zustandStore";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
	const lang = useStore((state) => state.language);

	return (
		<footer className="bg-gray-800 shadow min-w-full">
			<div className="md:flex md:justify-between md:items-center bg-gray-800 mx-auto p-4 w-full max-w-screen-xl">
				<span className="text-white text-sm sm:text-center">
					{lang == "eng" ? "Created with love by: " : "Creado con amor por: "}
					Correa Dylan
				</span>
				<ul className="flex flex-wrap items-center mt-3 sm:mt-0 font-medium text-gray-500 dark:text-gray-400 text-sm">
					<li className="flex justify-center mx-2 py-1 rounded-md font-semibold text-gray-400 hover:text-white hover:scale-105 duration-150">
						<a href="#" className="m-auto pr-1 text-gray-300 text-xl">
							<FaLinkedinIn />
						</a>
					</li>
					<li className="flex justify-center mx-2 py-1 rounded-md font-semibold text-gray-400 hover:text-white hover:scale-105 duration-150">
						<a href="#" className="m-auto pr-1 text-gray-300 text-xl">
							<FaGithub />
						</a>
					</li>
					{/* <li>
            <a href="#" className="me-4 md:me-6 hover:underline">
                <BsTwitterX />
            </a>
        </li> */}
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
