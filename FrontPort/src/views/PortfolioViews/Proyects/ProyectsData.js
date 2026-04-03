import coreForce from "../../../assets/Proyects/coreForece/coreForce.jpg";
import iceCream from "../../../assets/Proyects/iceCream/IceCream.jpg";
import gestoria from "../../../assets/Proyects/GestoriaBravo/GestoriaBravo.jpg";
import blockchain from "../../../assets/Proyects/Blockchain/Blockchain.jpg";
import ecoCharge from "../../../assets/Proyects/ecoCharge/ecoCharge.jpg";

const projects = [
    {
      title: "Pomodoro App",
      url: null,
      techs: ["React Native", "Expo", "Calendar API"],
      descriptionEsp:
        "Aplicación en desarrollo basada en la técnica Pomodoro. La idea es integrarla con el calendario del dispositivo para registrar exámenes, tareas y proyectos, combinando gestión del tiempo con planificación académica.",
      descriptionEng:
        "A Pomodoro-based app currently in development. The goal is to integrate it with the device calendar to track exams, tasks, and project deadlines, combining time management with planning.",
      github: "as",
    },
    {
      title: "FrutaApp",
      url: null,
      techs: ["React Native", "IA", "Computer Vision"],
      descriptionEsp:
        "Aplicación mobile desarrollada en React Native que utiliza inteligencia artificial para escanear y reconocer frutas en tiempo real. Orientada a mejorar la experiencia de compra y aprendizaje nutricional.",
      descriptionEng:
        "A mobile app built with React Native that uses AI to scan and recognize fruits in real time. Focused on improving shopping experience and nutritional learning.",
      github: "as",
    },
  {
    title: "EcoCharge",
    url: ecoCharge,
    techs: ["React", "Typescript", "Tailwindcss", "Framer Motion"],
    descriptionEsp:
      "Una plataforma para entusiastas del fitness, desarrollada con React y TypeScript. Utiliza PostgreSQL para la gestión de datos y TailwindCSS para el diseño. Implementa pagos con Mercado Pago y Stripe, facilitando la suscripción a planes de entrenamiento.",
    descriptionEng:
      "A platform for fitness enthusiasts, developed with React and TypeScript. It uses PostgreSQL for data management and TailwindCSS for styling. Payment integration with Mercado Pago and Stripe allows users to subscribe to workout plans easily.",
    github: "https://github.com/DylanEzequiel/TechnicalTest_Qoop.Ai.git",
    vercel: "https://technical-test-qoop-ai.vercel.app",
  },
  {
    title: "Gestoria Bravo",
    url: gestoria,
    techs: ["React", "Typescript", "Tailwind css"],
    descriptionEsp:
      "Un sitio web corporativo para una gestoría, creado con React y TypeScript. Su diseño limpio con TailwindCSS transmite confianza y profesionalismo, ofreciendo información clara sobre los servicios legales y administrativos disponibles.",
    descriptionEng:
      "A corporate website for a management consultancy, created with React and TypeScript. Its clean design, built with TailwindCSS, conveys trust and professionalism, providing clear information about available legal and administrative services.",
    github: "https://github.com/DylanEzequiel/GestoriasBravo",
    vercel: "https://gestorias-bravo.vercel.app",
  },
  {
    title: "Heladeria IceCream",
    url: iceCream,
    techs: ["React", "Typescript", "Postgress", "Tailwindcss"],
    descriptionEsp:
      "Un e-commerce de helados diseñado con React y TypeScript. Cuenta con una base de datos en PostgreSQL y un diseño atractivo con TailwindCSS. Permite a los usuarios explorar sabores y realizar pedidos fácilmente.",
    descriptionEng:
      "An ice cream e-commerce website built with React and TypeScript. It features a PostgreSQL database and an attractive design with TailwindCSS. Users can explore flavors and place orders seamlessly.",
    github: "https://github.com/leandromortarini2/IceCream",
    vercel: "https://ice-cream-seven.vercel.app",
  },
  {
    title: "CoreForce Fitness",
    url: coreForce,
    techs: [
      "React",
      "Typescript",
      "Postgress",
      "Tailwindcss",
      "Mercado Pago",
      "Stripe",
    ],
    descriptionEsp:
      "Una plataforma para entusiastas del fitness, desarrollada con React y TypeScript. Utiliza PostgreSQL para la gestión de datos y TailwindCSS para el diseño. Implementa pagos con Mercado Pago y Stripe.",
    descriptionEng:
      "A platform for fitness enthusiasts, developed with React and TypeScript. It uses PostgreSQL for data management and TailwindCSS for styling. Payment integration with Mercado Pago and Stripe.",
    github: "https://github.com/DylanEzequiel/Front-CoreForce",
    vercel: "https://front-core-force.vercel.app",
  },
  {
    title: "Test SmartContracts & web3",
    url: blockchain,
    techs: [
      "React",
      "Typescript",
      "Metamask",
      "Web3",
      "Remix IDE",
      "Tailwindcss",
    ],
    descriptionEsp:
      "Un proyecto de prueba sobre contratos inteligentes en blockchain, desarrollado con React y TypeScript. Usa herramientas como Metamask y Remix IDE para la interacción con Web3.",
    descriptionEng:
      "A test project on smart contracts in blockchain, developed with React and TypeScript. It utilizes tools like Metamask and Remix IDE to interact with Web3.",
    github: "https://github.com/DylanEzequiel/ExtrimianChallenge.git",
  },

  // NUEVOS

];

export default projects


{/* <ProyectComp
					url={ecoCharge}
					title={"EcoCharge"}
					techs={["React", "Typescript", "Tailwindcss", "Framer Motion"]}
					descriptionEsp={
						"Una plataforma para entusiastas del fitness, desarrollada con React y TypeScript. Utiliza PostgreSQL para la gestión de datos y TailwindCSS para el diseño. Implementa pagos con Mercado Pago y Stripe, facilitando la suscripción a planes de entrenamiento."
					}
					descriptionEng={
						"A platform for fitness enthusiasts, developed with React and TypeScript. It uses PostgreSQL for data management and TailwindCSS for styling. Payment integration with Mercado Pago and Stripe allows users to subscribe to workout plans easily."
					}
					github={"https://github.com/DylanEzequiel/TechnicalTest_Qoop.Ai.git"}
					vercel={"https://technical-test-qoop-ai.vercel.app"}
				></ProyectComp>
				<ProyectComp
					url={gestoria}
					title={"Gestoria Bravo"}
					techs={["React", "Typescript", "Tailwind css"]}
					descriptionEsp={
						"Un sitio web corporativo para una gestoría, creado con React y TypeScript. Su diseño limpio con TailwindCSS transmite confianza y profesionalismo, ofreciendo información clara sobre los servicios legales y administrativos disponibles."
					}
					descriptionEng={
						"A corporate website for a management consultancy, created with React and TypeScript. Its clean design, built with TailwindCSS, conveys trust and professionalism, providing clear information about available legal and administrative services."
					}
					github={"https://github.com/DylanEzequiel/GestoriasBravo"}
					vercel={"https://gestorias-bravo.vercel.app"}
				></ProyectComp>
				<ProyectComp
					url={iceCream}
					title={"Heladeria IceCream"}
					techs={["React", "Typescript", "Postgress", "Tailwindcss"]}
					descriptionEsp={
						"Un e-commerce de helados diseñado con React y TypeScript. Cuenta con una base de datos en PostgreSQL y un diseño atractivo con TailwindCSS. Permite a los usuarios explorar sabores y realizar pedidos fácilmente."
					}
					descriptionEng={
						"An ice cream e-commerce website built with React and TypeScript. It features a PostgreSQL database and an attractive design with TailwindCSS. Users can explore flavors and place orders seamlessly."
					}
					github={"https://github.com/leandromortarini2/IceCream"}
					vercel={"https://ice-cream-seven.vercel.app"}
				></ProyectComp>
				<ProyectComp
					url={coreForce}
					title={"CoreForce Fitness"}
					techs={[
						"React",
						"Typescript",
						"Postgress",
						"Tailwindcss",
						"Mercado Pago",
						"stripe",
					]}
					descriptionEsp={
						"Una plataforma para entusiastas del fitness, desarrollada con React y TypeScript. Utiliza PostgreSQL para la gestión de datos y TailwindCSS para el diseño. Implementa pagos con Mercado Pago y Stripe."
					}
					descriptionEng={
						"A platform for fitness enthusiasts, developed with React and TypeScript. It uses PostgreSQL for data management and TailwindCSS for styling. Payment integration with Mercado Pago and Stripe."
					}
					github={"https://github.com/DylanEzequiel/Front-CoreForce"}
					vercel={"https://front-core-force.vercel.app"}
				></ProyectComp>
				<ProyectComp
					url={blockchain}
					title={"Test SmartContracts & web3"}
					techs={[
						"React",
						"Typescript",
						"Metamask",
						"Web3",
						"Remix ide",
						"Tailwindcss",
					]}
					descriptionEng={
						"A test project on smart contracts in blockchain, developed with React and TypeScript. It utilizes tools like Metamask and Remix IDE to interact with Web3."
					}
					descriptionEsp={
						"Un proyecto de prueba sobre contratos inteligentes en blockchain, desarrollado con React y TypeScript. Usa herramientas como Metamask y Remix IDE para la interacción con Web3."
					}
					github={"https://github.com/DylanEzequiel/ExtrimianChallenge.git"}
				></ProyectComp> */}