// import React from 'react'

// const WomenNewCollectionSinglePage = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default WomenNewCollectionSinglePage
// import React from 'react'

// const WomenJeansSingle = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default WomenJeansSingle
import { Center, Heading, Img, VStack ,Text, Button} from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const WomenNewCollectionSinglePage = () => {
  const {id} = useParams();
  const [data,setData] = useState({});
  const fetchandRendering =(id)=>{
    axios.get(`http://localhost:3004/womennewcollection/${id}`).then((res)=>{
      console.log(res.data);
      setData(res.data)
    })
  }
  useEffect(()=>{
    fetchandRendering(id)
  },[id])
  return (
    <div>
      <Center w='60%' m='auto'>
      <VStack>
      <Img src={data.img} alt={data.title} w={300}/>
      <Heading color='green'>Price : {data.seeling_price}</Heading>
      <Heading color='red' style={{textDecoration : 'line-through'}}>{data.original_price}</Heading>
      <Heading>{data.title}</Heading>
      <Heading> Color : {data.color}</Heading>
      <Text>{data.discrption}</Text>
      <Button>Buy Now</Button>
      </VStack>
      </Center>
    </div>
  )
}

export default WomenNewCollectionSinglePage

