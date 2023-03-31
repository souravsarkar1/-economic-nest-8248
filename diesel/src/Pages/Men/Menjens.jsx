import { Heading ,Grid } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from '../../Pagination/Pagination'
import NormalCard from '../Card/NormalCard'
import LodingIndicator from '../Loding/LodingIndicator'
import Wron from '../Loding/Wron'

const Menjens = () => {
    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(false);
    const[error , setError] = useState(false);
    const [page , setPage] = useState(1);
    const handlePage = (newPage) => {
      setPage(newPage);
    };
    const fetchandRendering =(page)=>{
      setLoading(true);
        axios.get(`http://localhost:3004/menjeans?_page=${page}&_limit=6`).then((res)=>{
            console.log(res.data);
            setData(res.data)
            setLoading(false)
        }).catch((err)=>{
          console.log(err);
          setError(true)
        })
    }
    useEffect(()=>{
        fetchandRendering(page);
    },[page])
    if(loading){
      return <LodingIndicator/>
    }
    if(error){
      return <Wron/>
    }
  return (
    <div>
      <Heading>Men Jeans</Heading>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
    {data.map((el)=>(
        <NormalCard key={el.id} {...el} link="menjeans"/>
    ))}
    </Grid>
    <Pagination totalPages={3} currentPage={page} handlePageChange={handlePage} />
    </div>
  )
}

export default Menjens
