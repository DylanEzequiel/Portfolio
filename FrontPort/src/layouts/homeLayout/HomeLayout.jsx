import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

function HomeLayout() {
	return (
		<div className="-z-30 bg-[#0e0f1f]">
			<Header />
			<div >
				<div className="z-50">
					<Outlet />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default HomeLayout;
