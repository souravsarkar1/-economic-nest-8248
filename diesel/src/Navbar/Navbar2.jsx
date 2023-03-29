import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import Dropdoennavcomponent from './Dropdoennavcomponent'
import userIcon from '../icons/icons8-user-24.png'
import questionIcon from '../icons/icons8-question-mark-96.png'
import seatchIcon from '../icons/icons8-search-96.png'
import fvtIcon from '../icons/icons8-favorite-96.png'
import bagIcon from '../icons/icons8-shopping-bag-96.png'

const Navbar2 = () => {
  return (
    <Box
      style={{
        backgroundColor: 'red',
        color: 'white',
        height: '40px',
        alignItems: 'center',
        margin : 'auto',
        padding: 'auto',
        width : '99.90%',
        top: 0,
        zIndex: 1
      }}
    >
      <Flex justifyContent='space-between'>
        <Flex width='30%' justifyContent='space-between' marginTop={2}>
          <NavLink to='/men'>
            <Dropdoennavcomponent
              mainheading='Men'
              link1='link 1'
              link2='link 2'
              link3='link 3'
            />
          </NavLink>
          <NavLink to='/women'>
            <Dropdoennavcomponent
              mainheading='Women'
              link1='link 1'
              link2='link 2'
              link3='link 3'
            />
          </NavLink>
          <NavLink to='/kids'>
            <Dropdoennavcomponent
              mainheading='Kids'
              link1='link 1'
              link2='link 2'
              link3='link 3'
            />
          </NavLink>
          <NavLink to='/ss23'>
            <Dropdoennavcomponent
              mainheading={`SS'23`}
              link1='link 1'
              link2='link 2'
              link3='link 3'
            />
          </NavLink>
          <NavLink to='/lastchange'>
            <Dropdoennavcomponent
              mainheading='Last Change'
              link1='link 1'
              link2='link 2'
              link3='link 3'
            />
          </NavLink>
        </Flex>
        <Box>
        <Image
          src='https://dibackend.hostx1.de/logo-diesel.svg'
          alt='logo'
          position='sticky'
          w={300}
          height='30px'
          m='auto'
          p='auto'
          top='0'
          left='50%'
          transform='translate(-50%)'
          zIndex='1'
        /></Box>
        <Box>
        <Flex zIndex='1'>
        <Image src={userIcon} alt='login' w={10} border='2px solid white' />
        <Image src={questionIcon} alt='login' w={10} border='2px solid white' />
        <Image src={seatchIcon} alt='login' w={10} border='2px solid white' />
        <Image src={fvtIcon} alt='login' w={10} border='2px solid white' />
        <Image src={bagIcon} alt='login' w={10} border='2px solid white' />
      </Flex>
        </Box>
       
      </Flex>
    </Box>
  )
}

export default Navbar2
