import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProperties } from '../../redux/actions/index.jsx'
import { Pagination } from '../../components/Pagination/Pagination.jsx';
import Header from '../../components/Header/Header.jsx'
import Cards from '../../components/Cards/Cards.jsx'
import NavBar from '../../components/NavBar/NavBar.jsx'
import appFirebase from '../../credenciales.js';
import { getAuth,signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Home() {
  const auth =getAuth(appFirebase)
  const dispatch = useDispatch();
  const allProperties = useSelector((state)=> state.allProperties);
const navigate =useNavigate()
 // console.log(auth);


  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  

  useEffect( () => {
    dispatch(getAllProperties(currentPage, pageSize));
  },[dispatch, currentPage, pageSize]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };


  return (
    <>
      <div>
      <Header></Header>
      <NavBar></NavBar>
      <Cards allProperties={allProperties} currentPage={currentPage} pageSize={pageSize}></Cards>
      <Pagination pagina={currentPage} setPagina={setCurrentPage} maximo={10}  />
      
      <div>
         <button onClick={handleSignOut}>LogOut</button>
    </div>
      </div>
    </>
  )
}

export default Home;








/*import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProperties } from '../../redux/actions/index.jsx'
import { Pagination } from '../../components/Pagination/Pagination.jsx';
import Header from '../../components/Header/Header.jsx'
import Cards from '../../components/Cards/Cards.jsx'
import NavBar from '../../components/NavBar/NavBar.jsx'
import appFirebase from '../../credenciales.js';
import { getAuth,signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function Home() {
  const auth =getAuth(appFirebase)
  const dispatch = useDispatch();

 /* const allProperties = useSelector((state) => state.allProperties);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllProperties(currentPage, pageSize));
      setIsLoading(false);
    };
    fetchData();
  }, [dispatch, currentPage, pageSize]);

const allProperties = useSelector((state)=> state.allProperties);
//const [isLoading, setIsLoading] = useState(true);
const navigate =useNavigate()
 //LoginCreation
  //console.log(auth);



  const [currentPage, setCurrentPage] = useState(1); 
  const pageSize = 8;
  

  useEffect( () => {
    dispatch(getAllProperties(currentPage, pageSize));
  },[dispatch, currentPage, pageSize]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <>
      <div>
        <Header />
        <NavBar />
          <>
            <Cards allProperties={allProperties} currentPage={currentPage} pageSize={pageSize} />
           <Pagination pagina={currentPage} setPagina={setCurrentPage} maximo={10} />
          </>
      <div>
         <button onClick={handleSignOut}>LogOut</button>
    </div>
      </div>
    </>
  );
}

export default Home;
*/
/*
{isLoading ? (
  <div>Loading...</div>
) : (
)}*/