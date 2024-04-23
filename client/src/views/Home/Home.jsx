import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProperties } from '../../redux/actions/index.jsx';
import { Pagination } from '../../components/Pagination/Pagination.jsx';
import Header from '../../components/Header/Header.jsx';
import Cards from '../../components/Cards/Cards.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx';

function Home() {
  const dispatch = useDispatch();
  const allProperties = useSelector((state) => state.allProperties);
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar si se están cargando los datos
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllProperties(currentPage, pageSize));
      setIsLoading(false); // Cuando los datos se carguen, establecer isLoading en false
    };
    fetchData();
  }, [dispatch, currentPage, pageSize]);

  return (
    <>
      <div>
        <Header />
        <NavBar />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <Cards allProperties={allProperties} currentPage={currentPage} pageSize={pageSize} />
            <Pagination pagina={currentPage} setPagina={setCurrentPage} maximo={10} />
          </>
        )}
      </div>
    </>
  );
}

export default Home;
