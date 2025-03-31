import useStore from "../../../zustandStore";
import ParallaxBGFrameSelector from "../../Components/FrameSelector/parallaxBGFrameSelector";
import FrameComponent from "../../Components/FrameSelector/FrameComponent.jsx/FrameComponent";

function FramesSelector() {
	const lang = useStore((state) => state.language);
	const pages = [
		{
			title: "Service",
			descriptionEng:
				"Showcase your business with a professional and well-structured service page. Highlight your offerings, add customer testimonials, and make it easy for potential clients to get in touch. Optimized for smooth navigation and an engaging experience on any device.	",
			descriptionEsp:
				"Destaca tu negocio con una página de servicios profesional y bien estructurada. Presenta lo que ofreces, agrega testimonios de clientes y facilita el contacto con potenciales clientes. Optimizada para una navegación fluida y una experiencia atractiva en cualquier dispositivo.",
			uri: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6efa13101924743.5f2a943e1b2d2.png",
			link: "/frame/Service",
		},
		// {
		// 	title: "Ecommerce",
		// 	descriptionEng:
		// 		"Turn visitors into customers with a modern and efficient online store. Display your products beautifully, integrate payment methods, and provide an intuitive shopping experience. Designed for fast loading speeds and full responsiveness.",
		// 	descriptionEsp:
		// 		"Convierte visitantes en clientes con una tienda online moderna y eficiente. Muestra tus productos de manera atractiva, integra métodos de pago y brinda una experiencia de compra intuitiva. Diseñada para cargar rápido y adaptarse a cualquier pantalla.",
		// 	uri: "https://www.australiansafetysigns.net.au/cdn/shop/products/caution_PAINTING_IN_PROGRESS.png?v=1571438564",
		// 	link: "/frame/ecomerce",
		// },
		// {
		// 	title: "Landing Page",
		// 	descriptionEng:
		// 		"Capture your audienc´s attention with a conversion-focused landing page. Perfect for promotions, events, launches, or lead generation. Clean design, effective calls to action, and a structure built for results.",
		// 	descriptionEsp:
		// 		"Capta la atención de tu audiencia con una landing page optimizada para conversiones. Ideal para promociones, eventos, lanzamientos o captación de leads. Diseño limpio, llamados a la acción efectivos y estructura enfocada en resultados.",
		// 	uri: "https://www.australiansafetysigns.net.au/cdn/shop/products/caution_PAINTING_IN_PROGRESS.png?v=1571438564",
		// 	link: "/frame/LandingPage",
		// },
		// {
		// 	title: "Blog",
		// 	descriptionEng:
		// 		"Share your ideas, news, or experiences with a dynamic and easy-to-manage blog. Designed for a comfortable reading experience, with categories, tags, and SEO optimization to help you reach a wider audience.",
		// 	descriptionEsp:
		// 		"Comparte tus ideas, noticias o experiencias con un blog dinámico y fácil de gestionar. Diseñado para una lectura cómoda, con opciones de categorías, etiquetas y optimización SEO para mejorar tu alcance.",
		// 	uri: "https://www.australiansafetysigns.net.au/cdn/shop/products/caution_PAINTING_IN_PROGRESS.png?v=1571438564",
		// 	link: "/frame/Blog",
		// },
	];
	return (
		<article className="z-20 relative min-h-screen">
			<ParallaxBGFrameSelector />
			<header className="py-28">
				<h4 className="p-2 font-semibold text-white text-4xl text-center">
					{lang == "eng" ? "Frames" : "Plantillas"}
				</h4>

				<p className="m-auto py-10 max-w-[48rem] font-semibold text-white text-lg text-center">
					{lang == "eng"
						? "Explore this collection of templates designed for different purposes. Whether you need a business page, a portfolio, an online store or a blog, you'll find optimized and easy-to-customize options. Choose the one that best suits your project and let´s start building in minutes."
						: "Explora esta colección de plantillas diseñadas para diferentes propósitos. Ya sea que necesites una página para un negocio, un portafolio, una tienda en línea o un blog, encontrarás opciones optimizadas y fáciles de personalizar. Elige la que mejor se adapte a tu proyecto y comencemos a construir en minutos."}
				</p>
			</header>
			<main className="flex flex-col gap-24 m-auto max-w-[52rem] font-semibold text-white">
				{pages.map((page, index) => {
					return (
						<FrameComponent
							key={index}
							title={page.title}
							descriptionEng={page.descriptionEng}
							descriptionEsp={page.descriptionEsp}
							uri={page.uri}
							link={page.link}
							reverse={index % 2 == 0}
						/>
					);
				})}
			</main>
		</article>
	);
}

export default FramesSelector;
