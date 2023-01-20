import React from 'react';
import Crocs from '../Pages/Crocs';
import Featured from '../Pages/Featured';
import Home from '../Pages/Home';
import Jibbitz from '../Pages/Jibbitz';
import Sale from '../Pages/Sale';
import Women from '../Pages/Women';
import {Route,Routes} from 'react-router-dom'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Crocs' element={<Crocs />} />
        <Route path='/Featured' element={<Featured />} />
        <Route path='/Jibbitz' element={<Jibbitz />} />
        <Route path='/Sale' element={<Sale />} />
        <Route path='/Women ' element={<Women  />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
