import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper'
import 'swiper/css';
import 'swiper/css/free-mode'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Text} from '@chakra-ui/react';
import {  NavLink } from 'react-router-dom';

const Hero21 = ({cardDeteals}) => {
    return (
        <div>
            <div className='container py-4 justify-content-center' >
                <Swiper
                    freeMode={!true}
                    grabCursor={!true}
                    modules={[FreeMode]}
                    slidesPerView={5}
                    spaceBetween={30}

                >
                <NavLink to='/women'>
                  {cardDeteals.map((el,i)=>(
                
                    <SwiperSlide>
                    key = {i}
                    <img src={el.img} alt={el.deteals}  style={{
                        height : '300px'
                    }}/>
                    <Text>{el.deteals}</Text>
                    <Text color='green.600'>₹ {el.price}   {el.discount} discount</Text>
                    <Text textDecoration='line-through'>₹ {el.originalprice}</Text>
                    <Text textAlign='right' color='red'>Only Few Left</Text>
                    </SwiperSlide>
                  ))}
                  </NavLink>
                </Swiper>
            </div>
        </div>
    )
}

export default Hero21
