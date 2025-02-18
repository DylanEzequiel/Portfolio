import React from 'react'
import { IoCodeWorking } from "react-icons/io5";
import ProyectComp from '../../Components/ProyectComp/ProyectComp';
import coreForce from "../../assets/coreForece/coreForce.jpg"
import iceCream from "../../assets/iceCream/IceCream.jpg"
import gestoria from "../../assets/GestoriaBravo/GestoriaBravo.jpg"
import blockchain from "../../assets/Blockchain/Blockchain.jpg"


function Proyects() {
  return (
    <article className='my-10'>
        
        <main className='flex flex-col m-auto'>
            
            <ProyectComp 
              url={coreForce}
              title={"CoreForce Fitness"}
              techs={["React","Typescript","Postgress","Tailwindcss","Mercado Pago","stripe"]}
              description={"gimnasio"}  
              github={"https://github.com/DylanEzequiel/Front-CoreForce"}
            ></ProyectComp>
            <ProyectComp 
              url={iceCream}
              title={"Heladeria IceCream"}
              techs={["React","Typescript","Postgress","Tailwindcss"]}
              description={"Heladeria"}  
              github={"https://github.com/leandromortarini2/IceCream"}
            ></ProyectComp>
            <ProyectComp 
              url={gestoria}
              title={"Gestoria Bravo"}
              techs={["React","Typescript","Tailwind css"]}
              description={"Seguros"}
              github={"https://github.com/DylanEzequiel/GestoriasBravo"}
              vercel={"hola"} 
            ></ProyectComp>
            <ProyectComp 
              url={blockchain}
              title={"Test SmartContracts & web3"}
              techs={["React","Typescript","Metamask","Web3","Remix ide","Tailwindcss"]}
              description={"Small test proyect where i created a smart contract wich saved and returned strings"}  
              github={"https://github.com/DylanEzequiel/ExtrimianChallenge.git"}
            ></ProyectComp>
            
           
            
            
        </main>
    </article>
  )
}

export default Proyects