import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllProperties } from '../../redux/actions/index.jsx'

import Header from '../../components/Header/Header.jsx'
import Cards from '../../components/Cards/Cards.jsx'
import NavBar from '../../components/NavBar/NavBar.jsx'

function Home() {
  const dispatch = useDispatch();
  const allProperties = useSelector((state)=> state.allProperties);

  useEffect( () => {
    dispatch(getAllProperties());
  },[dispatch]);

  return (
    <>
      <div>
      <Header></Header>
      <NavBar></NavBar>
      <Cards allProperties={allProperties}></Cards>
      </div>
    </>
  )
}

export default Home;
