import { MdMilitaryTech } from "react-icons/md";
import TechComp from '../../../Components/PortfolioSector/Tech/TechComp';
import SmallTechComp from '../../../Components/PortfolioSector/SmallTech/SmallTechComp';


function Skills() {
  return (
    <article className='m-auto'>
        <header>
            <h4 className='py-10 font-semibold text-white text-2xl'>
                <MdMilitaryTech className='inline' size={30}/> Techs
            </h4>
        </header>
        <main className='flex flex-col gap-4 p-4'>
          <div className='bg-gray-600/20 rounded-md w-full duration-200'>
            <h4 className='pt-2 pl-8 font-semibold text-white text-xl'>FrontEnd</h4>

            <aside className='md:gap-2 grid grid-cols-4 lg:grid-cols-6 m-auto p-2 grif'>
              <TechComp image="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png" title="HTML"></TechComp>
              <TechComp image="https://cdn-icons-png.flaticon.com/512/732/732190.png" title="CSS"></TechComp>
              <TechComp image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" title="React"></TechComp>
              <TechComp image="https://i18nexus.com/_next/static/media/nextjs.e54be70c.svg" title="Next.Js"></TechComp>
              <TechComp image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" title="tailwincss"></TechComp>
              <TechComp image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" title="bootstrap"></TechComp>
              <TechComp image="https://blog.greggant.com/images/posts/2019-04-25-figma/Figma.png" title="Figma"></TechComp>
              <TechComp image="https://cdn.iconscout.com/icon/free/png-256/free-angular-226066.png?f=webp" title="Angular"></TechComp>
              <TechComp image="https://static-00.iconduck.com/assets.00/sdk-react-native-icon-512x490-ynyk8t4w.png" title="React Native"></TechComp>
              
               
            </aside>
          </div>
          <div className='flex justify-between w-full'>
            <div className='bg-gray-600/20 rounded-md w-[48%]'>
              <h4 className='pt-2 pl-8 font-semibold text-white text-xl'>BackEnd</h4>

              <aside className='gap-4 grid grid-cols-2 md:grid-cols-3 m-auto p-4'>
                
                <SmallTechComp image={"https://cdn.hackersandslackers.com/2020/05/express.png"} title={"Express"}></SmallTechComp>
                <SmallTechComp image={"https://www.svgrepo.com/show/331488/mongodb.svg"} title={"MongoDB"}></SmallTechComp>
                <SmallTechComp image={"https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png"} title={"MySQL"}></SmallTechComp>
                <SmallTechComp image={"https://avatars.githubusercontent.com/u/20165699?s=200&v=4"} title={"TypeOrm"}></SmallTechComp>
                {/* <SmallTechComp image={""} title={""}></SmallTechComp> */}
                {/* <SmallTechComp image={""} title={""}></SmallTechComp>
                <SmallTechComp image={""} title={""}></SmallTechComp> */}
              </aside>
            </div>

            <div className='bg-gray-600/20 rounded-md w-[48%]'>
              <h4 className='pt-2 pl-8 font-semibold text-white text-xl'>Languages</h4>

              <aside className='gap-4 grid grid-cols-2 md:grid-cols-3 m-auto p-4'>
              <SmallTechComp image={"https://images.ctfassets.net/8cjpn0bwx327/4qh4QnGMijukvgtdmGbFhd/160e0ec00b30c40e5b494199e83c061a/Learning-Apex-Salesforce.png"} title={"Apex"}></SmallTechComp>
              <SmallTechComp image={"https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png"} title={"JavaScript"}></SmallTechComp>
              <SmallTechComp image={"https://static-00.iconduck.com/assets.00/typescript-icon-icon-1024x1024-vh3pfez8.png"} title={"TypeScrip"}></SmallTechComp>
              
              </aside>
            </div>
            

          </div>
        </main>
    </article>
  )
}

export default Skills