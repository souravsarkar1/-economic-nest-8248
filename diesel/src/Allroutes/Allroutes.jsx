import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import ContactUs from '../Pages/ContactUs'
import Home from '../Pages/Home'
import Kids from '../Pages/Kids'
import KidsJeans from '../Pages/Kids/KidsJeans'
import KidsNewCollection from '../Pages/Kids/KidsNewCollection'
import KidsShoes from '../Pages/Kids/KidsShoes'
import Login from '../Pages/Login'
import Men from '../Pages/Men'
import Menjens from '../Pages/Men/Menjens'
import MenNewCollection from '../Pages/Men/MenNewCollection'
import Menshoes from '../Pages/Men/Menshoes'
import RegisterNewUser from '../Pages/RegisterNewUser'
import KidJeansSingleProduct from '../Pages/Single Product/Kid/KidJeansSingleProduct'
import KidnewcollectionsinglePage from '../Pages/Single Product/Kid/KidnewcollectionsinglePage'
import KidShoesSinglePage from '../Pages/Single Product/Kid/KidShoesSinglePage'
import Newcollection from '../Pages/Single Product/Men/Newcollection'
import Shoes from '../Pages/Single Product/Men/Shoes'
import SingleProduct from '../Pages/Single Product/Men/SingleProduct'
import WomenJeansSingle from '../Pages/Single Product/Women/WomenJeansSingle'
import WomenNewCollectionSinglePage from '../Pages/Single Product/Women/WomenNewCollectionSinglePage'
import WomenshoesSingle from '../Pages/Single Product/Women/WomenshoesSingle'

import Women from '../Pages/Women'
import WomenJeans from '../Pages/Women/WomenJeans'
import WomenNewCollection from '../Pages/Women/WomenNewCollection'
import WomenShoes from '../Pages/Women/WomenShoes'

const Allroutes = () => {
  return (
    <div>
     <Routes>
     <Route path='/' element = {<Home/>}/>
     <Route path='/men' element = {<Men/>}/>
     <Route path='/women' element = {<Women/>}/>
     <Route path='/kids' element = {<Kids/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<RegisterNewUser/>}/>
     <Route path='/contactus' element={<ContactUs/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/menjens' element={<Menjens/>}/>
     <Route path='/menshoes' element={<Menshoes/>}/>
     <Route path='/mennewcollection' element={<MenNewCollection/>}/>
     <Route path='/womenjens' element={<WomenJeans/>}/>
     <Route path='/womenshoes' element={<WomenShoes/>}/>
     <Route path='/womennewcollection' element={<WomenNewCollection/>}/>
     <Route path='/kidjens' element={<KidsJeans/>}/>
     <Route path='/kidshoes' element={<KidsShoes/>}/>
     <Route path='/kidnewcollection' element={<KidsNewCollection/>}/>
     <Route path='/menjeans/:id' element={<SingleProduct/>}/>
     <Route path='/menshoes/:id' element={<Shoes/>}/>
     <Route path='/menshoes/:id' element={<Shoes/>}/>
     <Route path='/mennewcollection/:id' element={<Newcollection/>}/>
     <Route path='/womenjeans/:id' element={<WomenJeansSingle/>}/>
     <Route path='/womenshoes/:id' element={<WomenshoesSingle/>}/>
     <Route path='/womennewcollection/:id' element={<WomenNewCollectionSinglePage/>}/>
     <Route path='/kidjeans/:id' element={<KidJeansSingleProduct/>}/>
     <Route path='/kidshoes/:id' element={<KidShoesSinglePage/>}/>
     <Route path='/kidnewcollection/:id' element={<KidnewcollectionsinglePage/>}/>
     
     </Routes>
    </div>
  )
}

export default Allroutes
