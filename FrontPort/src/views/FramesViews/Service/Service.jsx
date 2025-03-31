import React from "react";
import useStore from "../../../../zustandStore";
import HeadersTitles from "../../../FramesComponents/ServiceFrame/headersTitles/HeadersTitles";
import S_MoreFeat from "../../../FramesComponents/ServiceFrame/S_MoreFeat/S_MoreFeat";
import Clients from "../../../FramesComponents/Clients/Clients";
import Features from "../../../FramesComponents/ServiceFrame/Features/Features";
import ClientsTestimonies from "../../../FramesComponents/ServiceFrame/ClientsTesimonies/ClientsTestimonies";
import ContactFrame from "../../../FramesComponents/Contact/ContactFrame";
import AboutService from "../../../FramesComponents/ServiceFrame/AboutService/AboutService";
import { NavbarService } from "../../../FramesComponents/ServiceFrame/Navbars/Navbars";
function Service() {
	const { pageColors } = useStore();

	return (
		<div
			style={{ backgroundColor: pageColors.background, color: pageColors.text }}
		>
			<NavbarService />

			{/* Presentation */}
			<article className="flex flex-row flex-1 justify-evenly items-center gap-8 m-auto py-48 max-w-[68rem]h-full">
				<main
					className="flex flex-col gap-1 max-w-[50%]"
					style={{ color: pageColors.text }}
				>
					<i className="font-semibold">company name</i>
					<h1 className="font-semibold text-6xl">
						Title of your page or{" "}
						<span style={{ color: pageColors.principal }}>Bussiness</span>
					</h1>
					<p className="py-4 text-xl">
						Sub title or description of your page and so much info that you
						would like to add
					</p>

					<button
						className="px-3 py-1 rounded-sm w-max text-md"
						style={{ backgroundColor: pageColors.principal }}
					>
						Lets see More
					</button>
				</main>
				<aside>
					<img
						src="https://cdn.prod.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e298b4f0b93dcc_TB_DrawKit_Teamwork077-min.png"
						alt="Logo of the Service or image"
						className="rounded-tr-lg rounded-bl-lg h-96"
					/>
				</aside>
			</article>
			<Clients />
			<AboutService />
			<Features />
			{/* more data */}
			<article className="">
				<HeadersTitles
					type={"Why us"}
					title={"Inspirational title for the section"}
					desc={
						"	Lorem ipsum dolor sit amet, consectetur adipisicing elit. In isteodio rem eos accusamus repudiandae illo neque accusantium?"
					}
				/>

				<main className="flex lg:flex-row flex-col justify-center items-center py-20">
					<div className="flex flex-col justify-between gap-4 w-80 h-96">
						<S_MoreFeat />
						<S_MoreFeat />
					</div>
					<div>
						<img
							src="https://multiclics.com/wp-content/uploads/2021/10/im-image-section-122.png"
							alt=""
							className="h-72"
						/>
					</div>
					<div className="flex flex-col justify-between gap-4 w-80 h-96">
						<S_MoreFeat />
						<S_MoreFeat />
					</div>
				</main>
			</article>
			{/* Client Testimonies */}
			<article>
				<HeadersTitles
					type="Testimonies"
					title="	What out clients say´s about our services"
				/>
				<main className="justify-center gap-4 grid grid-cols-3 grid-rows-2 grid-flow-row py-20">
					<ClientsTestimonies />
					<ClientsTestimonies />
					<ClientsTestimonies />
					<ClientsTestimonies />
					<ClientsTestimonies />
					<ClientsTestimonies />
				</main>
			</article>
			<article>
				<ContactFrame />
			</article>
		</div>
	);
}

export default Service;
