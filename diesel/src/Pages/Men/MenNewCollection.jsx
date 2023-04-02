 import { Heading ,Grid } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from '../../Pagination/Pagination'
import NormalCard from '../Card/NormalCard'
import LodingIndicator from '../Loding/LodingIndicator'
import Wron from '../Loding/Wron'
import Sortproducts from '../Card/Sortproducts'

const MenNewCollection = () => {
    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(false);
    const[error , setError] = useState(false);
    const [page , setPage] = useState(1);
    
    const [filterby , setFilterBy] = useState('')
    const handlePage = (newPage) => {
      setPage(newPage);
    };
    const fetchandRendering = (page, filterby) => {
      setLoading(true);
      axios
        .get(`http://localhost:3004/mennewcollection?_page=${page}&_limit=6&_sort=seeling_price&_order=${filterby}`)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          setLoading(false);
          setError(false);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });
    };
    
    useEffect(()=>{
        fetchandRendering(page , filterby);
    },[page , filterby])
    if(loading){
      return <LodingIndicator/>
    }
    if(error){
      return <Wron/>
    }
  return (
    <div>
      <Heading>Men New Collection</Heading>
      <Sortproducts filterby={filterby} setFilterBy={setFilterBy}/>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
    {data.map((el)=>(
        <NormalCard key={el.id} {...el} link="mennewcollection"/>
    ))}
    </Grid>
    <Pagination totalPages={3} currentPage={page} handlePageChange={handlePage} />
    </div>
  )
}

export default MenNewCollection
