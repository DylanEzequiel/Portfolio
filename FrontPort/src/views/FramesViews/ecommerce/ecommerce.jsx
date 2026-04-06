import React, { useEffect, useState } from 'react';
import { NavbarEccomerce } from '../../../FramesComponents/ServiceFrame/Navbars/Navbars';
import useStore from '../../../../zustandStore';
import shirt from '../../../../src/assets/Eccomerce/shirtsPromo.png';
import shoe from '../../../../src/assets/Eccomerce/ShoesPromo.png';
import sweater from '../../../../src/assets/Eccomerce/sweatersPromo.png';
import { Carousel } from 'antd';
import axios from 'axios';
function Ecommerce() {
    const { pageColors } = useStore();
    const [data, setData] = useState([shirt, shoe, sweater]);

    return (
        <div style={{ backgroundColor: pageColors.background, color: pageColors.text }}>
            <NavbarEccomerce />

            <div className='p-16 h-screen'>
                <Carousel dots={false} autoplay className='pt-4 w-full max-h-96 overflow-hidden'>
                    {data.map((item, index) => (
                        <div key={index} className='relative w-full h-96 overflow-hidden'>
                            <div
                                className='absolute inset-0 bg-cover bg-center blur-md'
                                style={{ backgroundImage: `url(${item})` }}
                            />
                            <img className='z-10 relative m-auto p-2 h-96' src={item} alt={item} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Ecommerce;
