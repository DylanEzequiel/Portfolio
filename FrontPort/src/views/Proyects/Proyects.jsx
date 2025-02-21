import React from 'react'
import { IoCodeWorking } from "react-icons/io5";
import ProyectComp from '../../Components/ProyectComp/ProyectComp';
import coreForce from "../../assets/coreForece/coreForce.jpg"
import iceCream from "../../assets/iceCream/IceCream.jpg"
import gestoria from "../../assets/GestoriaBravo/GestoriaBravo.jpg"
import blockchain from "../../assets/Blockchain/Blockchain.jpg"


function Proyects() {
  return (
    <article className='my-10 w-full max-w-[48rem]'>
        
        <main className='flex flex-col m-auto w-full'>
            
            <ProyectComp 
              url={coreForce}
              title={"CoreForce Fitness"}
              techs={["React","Typescript","Postgress","Tailwindcss","Mercado Pago","stripe"]}
              descriptionEsp={"Una plataforma para entusiastas del fitness, desarrollada con React y TypeScript. Utiliza PostgreSQL para la gestión de datos y TailwindCSS para el diseño. Implementa pagos con Mercado Pago y Stripe, facilitando la suscripción a planes de entrenamiento."}  
              
              descriptionEng={"A platform for fitness enthusiasts, developed with React and TypeScript. It uses PostgreSQL for data management and TailwindCSS for styling. Payment integration with Mercado Pago and Stripe allows users to subscribe to workout plans easily."}  
              github={"https://github.com/DylanEzequiel/Front-CoreForce"}
              vercel={"https://front-core-force.vercel.app"}
            ></ProyectComp>
            <ProyectComp 
              url={iceCream}
              title={"Heladeria IceCream"}
              techs={["React","Typescript","Postgress","Tailwindcss"]}
              descriptionEsp={"Un e-commerce de helados diseñado con React y TypeScript. Cuenta con una base de datos en PostgreSQL y un diseño atractivo con TailwindCSS. Permite a los usuarios explorar sabores y realizar pedidos fácilmente."}  

              descriptionEng={"An ice cream e-commerce website built with React and TypeScript. It features a PostgreSQL database and an attractive design with TailwindCSS. Users can explore flavors and place orders seamlessly."}  
              github={"https://github.com/leandromortarini2/IceCream"}
              vercel={"ice-cream-seven.vercel.app"}
            ></ProyectComp>
            <ProyectComp 
              url={gestoria}
              title={"Gestoria Bravo"}
              techs={["React","Typescript","Tailwind css"]}
              descriptionEsp={"Un sitio web corporativo para una gestoría, creado con React y TypeScript. Su diseño limpio con TailwindCSS transmite confianza y profesionalismo, ofreciendo información clara sobre los servicios legales y administrativos disponibles."}

              descriptionEng={"A corporate website for a management consultancy, created with React and TypeScript. Its clean design, built with TailwindCSS, conveys trust and professionalism, providing clear information about available legal and administrative services."}
              github={"https://github.com/DylanEzequiel/GestoriasBravo"}
              vercel={"https://gestorias-bravo.vercel.app"} 
            ></ProyectComp>
            <ProyectComp 
              url={blockchain}
              title={"Test SmartContracts & web3"}
              techs={["React","Typescript","Metamask","Web3","Remix ide","Tailwindcss"]}
              descriptionEng={"A test project on smart contracts in blockchain, developed with React and TypeScript. It utilizes tools like Metamask and Remix IDE to interact with Web3, allowing users to store and retrieve data on the blockchain with a TailwindCSS-based design."} 

              descriptionEsp={"Un proyecto de prueba sobre contratos inteligentes en blockchain, desarrollado con React y TypeScript. Usa herramientas como Metamask y Remix IDE para la interacción con Web3, permitiendo almacenar y recuperar datos en la blockchain con un diseño basado en TailwindCSS."}
              github={"https://github.com/DylanEzequiel/ExtrimianChallenge.git"}
            ></ProyectComp>
            
           
            
            
        </main>
    </article>
  )
}

export default Proyects