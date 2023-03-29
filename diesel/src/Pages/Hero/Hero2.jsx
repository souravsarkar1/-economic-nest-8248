import React from 'react'
import { Flex , Box, Heading ,Text} from '@chakra-ui/react'
//import Carousel from 'react-bootstrap/Carousel';
import Hero21 from './Hero21';
let cardDeteals = [
    {img:'https://diesel.gumlet.io/product/410345327008/300/410345327008_1_7301.webp?compress=true&q=70' , deteals : 'Women Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%',to:'/women'},
    {img:'https://diesel.gumlet.io/product/410372700007/300/410372700009_1_7922.webp?compress=true&q=70' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://diesel.gumlet.io/product/410315299001/300/410315299007_1_7936.webp?compress=true&q=70' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://diesel.gumlet.io/product/410315299001/300/410315299007_1_7936.webp?compress=true&q=70' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/women-s-purple-harry-s-house-graphic-printed-oversized-t-shirt-565913-1672383811-1.jpg' , deteals : 'Women Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/men-s-black-riot-xxx-tentican-oversized-full-sleeve-t-shirt-569063-1673612954-1.jpg' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/men-s-white-metallica-oversized-fit-t-shirt-564903-1671801755-1.jpg' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/men-s-white-metallica-oversized-fit-t-shirt-564903-1671801755-1.jpg' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://diesel.gumlet.io/product/410345327008/300/410345327008_1_7301.webp?compress=true&q=70' , deteals : 'Women Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/men-s-ginger-root-solid-oversized-fit-t-shirt-552870-1672295637-1.jpg' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/men-s-purple-the-warrior-king-graphic-printed-oversized-t-shirt-565902-1672377608-1.jpg' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://diesel.gumlet.io/product/410315299001/300/410315299007_1_7936.webp?compress=true&q=70' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/women-s-purple-harry-s-house-graphic-printed-oversized-t-shirt-565913-1672383811-1.jpg' , deteals : 'Women Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/men-s-black-riot-xxx-tentican-oversized-full-sleeve-t-shirt-569063-1673612954-1.jpg' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/men-s-white-metallica-oversized-fit-t-shirt-564903-1671801755-1.jpg' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
    {img:'https://images.bewakoof.com/t320/men-s-white-metallica-oversized-fit-t-shirt-564903-1671801755-1.jpg' , deteals : 'Men Dresses & Fashion' ,price : '1360', originalprice:'2000' ,discount :'35%'},
]
const Hero2 = () => {
  return (
    <div style={{
      justifyContent : 'space-around',
      gap : '40px',
      width : '93%',
      margin : 'auto'
    }}>
    <Flex style={{
        justifyContent : 'space-around',
        border : '1px solid black',
        

    }}>
    <div p='4' style={{
        alignItems: 'flex-start',
        justifyItems: 'left',
      width:'400px'
        
      }}>
        <Flex><Heading>FIT OF THE WEEK</Heading></Flex>
        <Heading>
          <Flex>
            <Heading as='h2' size='xl' color='red'>MEN</Heading>
            <Heading as='h2' size='xl'>| WOMAN</Heading>
          </Flex>
        </Heading>
        <Flex><Heading as='h4' size='md'>2019 D-STRUKT</Heading></Flex>
        <Flex><Text>Always cool, always in style, the D-STRUKT is an essential denim silhouette defined by a slim leg, mid-rise waist and classic fit.</Text></Flex>
       <Flex> <button  style={{
        backgroundColor : 'black',
        color:'white',
        padding : '11px',
       }}  size='lg'>Buy Now</button></Flex>
      </div>
      
    <Box >
    <Hero21 cardDeteals={cardDeteals}/>
        </Box>
  </Flex>
    </div>
  )
}

export default Hero2
