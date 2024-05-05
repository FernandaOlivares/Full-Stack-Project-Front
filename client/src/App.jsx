import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from '../src/views/LandingPage/LandingPage.jsx'
import Home from '../src/views/Home/Home.jsx';
import Detail from '../src/views/Detail/Detail.jsx';
import Create from '../src/views/Create/Create.jsx';
import AdminDashboard from '../src/views/AdminDashboard/AdminDashboard.jsx';
import AdminEditProperty from '../src/views/AdminEditProperty/AdminEditProperty.jsx';
import UserProfile from '../src/views/UserProfile/UserProfile.jsx';
import UserEditProfile from '../src/views/UserEditProfile/UserEditProfile.jsx';

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
        <Route exact path='/admin/editProperty/:id' element ={<AdminEditProperty/>}/>
        <Route exact path='/user/profile' element ={<UserProfile/>}/>
        <Route exact path='/user/profile/edit' element ={<UserEditProfile/>}/>
      </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App;
