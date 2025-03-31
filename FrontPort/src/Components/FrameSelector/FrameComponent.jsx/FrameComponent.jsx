import { Link } from "react-router-dom";
import useStore from "../../../../zustandStore";

function FrameComponent({
	title,
	descriptionEng,
	descriptionEsp,
	uri,
	link,
	reverse,
}) {
	const lang = useStore((state) => state.language);
	return (
		<div
			className={`flex  gap-4 p-2 ${reverse ? "flex-row" : "flex-row-reverse"}`}
		>
			<img
				src={uri}
				alt="service frame"
				className="bg-white rounded-md w-2/4"
			/>
			<div className="flex flex-col justify-center w-2/4 text-white">
				<h4 className="text-3xl">{title}</h4>
				<p className="text-md">
					{lang == "Eng" ? descriptionEng : descriptionEsp}
				</p>
				<Link
					to={link}
					className="py-4 w-max font-semibold text-[#c039ff] hover:text-[#a942d8] text-lg hover:scale-105 transition-all duration-150"
				>
					Visit Frame
				</Link>
			</div>
		</div>
	);
}

export default FrameComponent;
