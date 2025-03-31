import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/PortfolioViews/home/home";
import HomeLayout from "./layouts/homeLayout/HomeLayout";
import PlantillasLayout from "./layouts/plantillasLayout/PlantillasLayout";
import FramesSelector from "./views/FramesSelector/FramesSelector";
import Service from "./views/FramesViews/Service/Service";
import Blog from "./views/FramesViews/Blog/Blog";
import Ecommerce from "./views/FramesViews/ecommerce/ecommerce";
import LandingPage from "./views/FramesViews/landingPage/LandingPage";
import Error from "./views/Error/Error";

function App() {
	const routes = createBrowserRouter([
		{
			path: "/",
			element: <HomeLayout />,
			children: [
				{ index: true, element: <Home /> },
				{ path: "FrameSelector", element: <FramesSelector /> },
				{ path: "Error", element: <Error /> },
			],
		},
		{
			path: "/frame",
			element: <PlantillasLayout />,
			children: [
				{
					path: "Service",
					element: <Service />,
				},
				{
					path: "Blog",
					element: <Blog />,
				},
				{
					path: "ecomerce",
					element: <Ecommerce />,
				},
				{
					path: "landingPage",
					element: <LandingPage />,
				},
			],
		},
	]);
	return (
		<div className="z-10 bg-third_color min-w-screen min-h-screen">
			<RouterProvider router={routes} />
		</div>
	);
}

export default App;
