import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCombined } from '../../redux/actions/index.jsx'
import { Pagination } from '../../components/Pagination/Pagination.jsx';
import Header from '../../components/Header/Header.jsx'
import Cards from '../../components/Cards/Cards.jsx'
import NavBar from '../../components/NavBar/NavBar.jsx'


function Home() {
  const dispatch = useDispatch();
  const allProperties = useSelector((state)=> state.allProperties);
  console.log(allProperties);
 const pages=useSelector((state)=> state.pages);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  
  useEffect( () => {
    dispatch(filterCombined('all','all','default','default',currentPage));
  },[dispatch, currentPage, pageSize]);

  
  return (
    <>
      <div>
      <Header></Header>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage}></NavBar>
      <Cards allProperties={allProperties} ></Cards>
      <Pagination pagina={currentPage} setPagina={setCurrentPage} maximo={pages}  />
      </div>
    </>
  )
}

export default Home;
