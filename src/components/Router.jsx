import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Form';
import Home from './Home';
import Marks from './Marks';


export default function Router() {
  return (
    <div>
      <BrowserRouter >
        <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/form' element= {<Form/>}/>
            <Route path='/marks' element= {<Marks/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
