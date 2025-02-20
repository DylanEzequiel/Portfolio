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
              descriptionEsp={"gimnasio"}  
              descriptionEng={"we go gym"}  
              github={"https://github.com/DylanEzequiel/Front-CoreForce"}
              vercel={"https://front-core-force.vercel.app"}
            ></ProyectComp>
            <ProyectComp 
              url={iceCream}
              title={"Heladeria IceCream"}
              techs={["React","Typescript","Postgress","Tailwindcss"]}
              descriptionEsp={"Heladeria"}  
              descriptionEng={"Ice Cream Shop"}  
              github={"https://github.com/leandromortarini2/IceCream"}
              vercel={"ice-cream-seven.vercel.app"}
            ></ProyectComp>
            <ProyectComp 
              url={gestoria}
              title={"Gestoria Bravo"}
              techs={["React","Typescript","Tailwind css"]}
              descriptionEsp={"Seguros"}
              descriptionEng={"Safes"}
              github={"https://github.com/DylanEzequiel/GestoriasBravo"}
              vercel={"https://gestorias-bravo.vercel.app"} 
            ></ProyectComp>
            <ProyectComp 
              url={blockchain}
              title={"Test SmartContracts & web3"}
              techs={["React","Typescript","Metamask","Web3","Remix ide","Tailwindcss"]}
              descriptionEng={"Small test proyect where i created a smart contract wich saved and returned strings"}  
              descriptionEsp={"Miau"}
              github={"https://github.com/DylanEzequiel/ExtrimianChallenge.git"}
            ></ProyectComp>
            
           
            
            
        </main>
    </article>
  )
}

export default Proyects