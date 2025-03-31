import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

function HomeLayout() {
	return (
		<div className="z-10 bg-[#0e0f1f]">
			<Header />
			<div className="">
				<div>
					<Outlet />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default HomeLayout;
