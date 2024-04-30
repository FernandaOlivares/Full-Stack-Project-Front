import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProperties } from '../../redux/actions/index.jsx'
import { Pagination } from '../../components/Pagination/Pagination.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx'

import AdminHeader from '../../components/Admin/AdminHeader/AdminHeader.jsx';
import AdminCards from '../../components/Admin/AdminCards/AdminCards.jsx';

import styles from './AdminDashboard.module.css';

function AdminDashboard() {

  const dispatch = useDispatch();
  const allProperties = useSelector((state)=> state.allProperties);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  
  useEffect( () => {
    dispatch(getAllProperties(currentPage, pageSize));
  },[dispatch, currentPage, pageSize]);

    return (
    <div className={styles.adminDashboardContainer}>
      <AdminHeader/>
      <NavBar/>
      <AdminCards allProperties={allProperties} currentPage={currentPage} pageSize={pageSize} />
      <Pagination pagina={currentPage} setPagina={setCurrentPage} maximo={10} />
    </div>
  );
}

  export default AdminDashboard;