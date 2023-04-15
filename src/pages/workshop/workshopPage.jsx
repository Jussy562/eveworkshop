import React from 'react'
import Workshop from '../../components/workshop/workshop'
import Hero from '../../components/hero/hero'
import { Route, Routes } from 'react-router-dom';
import ProjectDetails from '../../components/workshop/projectDetails';

function Eveworkshop() {
  return (
    <div>
         
      <div className=' py-12 md:py-24 px-6 md:px-12 home-workshop'>
        <Workshop />
            {/* <Routes>
              <Route path='/' exact element={<Workshop />} />
              <Route path='/projectDetails/:name' exact element={<ProjectDetails />} />
            </Routes> */}
      </div>
    </div>
  )
}

export default Eveworkshop