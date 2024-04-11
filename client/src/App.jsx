import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../src/views/Home/Home.jsx';
import Detail from '../src/views/Detail/Detail.jsx';
import Create from '../src/views/Create/Create.jsx';

import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <div>
      <Routes>
        <Route exact path='/' element ={<Home/>}/>
        <Route exact path='/home' element ={<Home/>}/>
        <Route exact path='/home/:id' element ={<Detail/>}/>
        <Route exact path='/create' element ={<Create/>}/>
      </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App;
