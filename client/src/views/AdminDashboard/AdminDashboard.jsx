import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterDashboard } from '../../redux/actions/index.jsx'
import { Pagination } from '../../components/Pagination/Pagination.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx'

import AdminNavBar from '../../components/Admin/AdminNavBar/AdminNavBar.jsx';
import AdminHeader from '../../components/Admin/AdminHeader/AdminHeader.jsx';
import AdminCards from '../../components/Admin/AdminCards/AdminCards.jsx';

import styles from './AdminDashboard.module.css';

function AdminDashboard() {

  const dispatch = useDispatch();
  const allProperties = useSelector((state)=> state.allPropertiesDashboard);
  const pages=useSelector((state)=> state.pagesDashboard);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  
  useEffect( () => {
    dispatch(filterDashboard('all','all','default','default',currentPage));
  },[dispatch, currentPage, pageSize]);

    return (
    <div className={styles.adminDashboardContainer}>
      <AdminHeader/>
      <AdminNavBar currentPage={currentPage} setCurrentPage={setCurrentPage}></AdminNavBar>
      <AdminCards allProperties={allProperties}  />
      <Pagination pagina={currentPage} setPagina={setCurrentPage} maximo={pages} />
    </div>
  );
}

  export default AdminDashboard;