import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import ColorSelector from "../../Components/ColorSelector/ColorSelector";

function PlantillasLayout() {
	return (
		<div>
			<ColorSelector />

			<div className={` min-h-screen`}>
				<Outlet />
			</div>
			<div className="bg-black min-w-full">
				<Footer />
			</div>
		</div>
	);
}

export default PlantillasLayout;
