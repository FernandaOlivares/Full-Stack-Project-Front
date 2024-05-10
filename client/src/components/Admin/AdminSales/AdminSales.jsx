import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSales } from '../../../redux/actions/index.jsx';

import { formatPrice } from '../../../utils/priceFormat.js'

import styles from './AdminSales.module.css';


function AdminSales() {
  const dispatch = useDispatch();
  const allSales = useSelector((state)=> state.allSales);

  useEffect( () => {
    dispatch(getAllSales());
  },[dispatch]);


    return (
      <>
        <div>
          <div>
            <h2>Datos de Reservas</h2>
          </div>
          <table className={styles.miTabla}>
          <thead>
            <tr>
              <th>Fecha de Transacción</th>
              <th>ID Pago </th>
              <th>Código de Autorización</th>
              <th>ID Usuario</th>
              <th>ID Propiedad</th>
              <th>Descripción</th>
              <th>Monto de Reserva</th>
            </tr>
          </thead>
          <tbody>
            {allSales.map(sale => (
              <tr key={sale.paymentId}>
            <td>{sale.createdAt}</td>
            <td>{sale.paymentId}</td>
            <td>{sale.authorizationCode}</td>
            <td>{sale.UserId}</td>
            <td>{sale.propertyId}</td>
            <td>{sale.description}</td>
            <td>{formatPrice(sale.amount)}</td>
          </tr>
        ))}
      </tbody>
    </table>

          <div>
          </div>
        </div>
      </>
    )
  }
  
  export default AdminSales;