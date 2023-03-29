import { Flex , Box, Heading , Text} from '@chakra-ui/react'
import React from 'react'
const footerCard =({data})=>{
return (
    <div>
   {data.map((el)=>(
    <Text>{el}</Text>
   ))}
    </div>
)
}
const help =[
    'Order Status','Delivery',"Returns" , 'Contact Us','View All'
]
const Footer1 = () => {
  return (
    <div>
      <Flex justifyContent='space-around'>
      <Box>
      <Heading  as='h5' size='sm'>Help</Heading>
      <footerCard data={help}/>
      </Box>
      <Box>
      <Heading  as='h5' size='sm'>COOKIE POLICY & TERMS
      </Heading>
      </Box>
      <Box>
      <Heading  as='h5' size='sm'>WORLD OF DIESEL
      </Heading>
      
      </Box>
      <Box>
      <Heading  as='h5' size='sm'>STORE LOCATOR</Heading>
      </Box>
      </Flex>
    </div>
  )
}

export default Footer1
