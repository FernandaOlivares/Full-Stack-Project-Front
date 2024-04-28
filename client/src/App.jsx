import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from '../src/views/LandingPage/LandingPage.jsx'
import Home from '../src/views/Home/Home.jsx';
import Detail from '../src/views/Detail/Detail.jsx';
import Create from '../src/views/Create/Create.jsx';
import AdminDashboard from '../src/views/AdminDashboard/AdminDashboard.jsx';
import UserProfile from '../src/views/UserProfile/UserProfile.jsx';

import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <div>
      <Routes>
        <Route exact path='/' element ={<LandingPage/>}/>
        <Route exact path='/home' element ={<Home/>}/>
        <Route exact path='/home/:id' element ={<Detail/>}/>
        <Route exact path='/create' element ={<Create/>}/>
        <Route exact path='/admin/dashboard' element ={<AdminDashboard/>}/>
        <Route exact path='/user/profile' element ={<UserProfile/>}/>
      </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App;
