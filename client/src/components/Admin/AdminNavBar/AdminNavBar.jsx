import { useState, useEffect } from 'react';
import styles from './AdminNavBar.module.css';
import { useDispatch } from 'react-redux';
import { filterCombined } from '../../../redux/actions';

const NavBar = () => {
  const dispatch = useDispatch();

  // Estado de los filtros
  const [selectedType, setSelectedType] = useState(() => {
    return localStorage.getItem('selectedType') || 'all';
  });
  const [selectedCategory, setSelectedCategory] = useState(() => {
    return localStorage.getItem('selectedCategory') || 'all';
  });
  const [selectedPriceOrder, setSelectedPriceOrder] = useState(() => {
    return localStorage.getItem('selectedPriceOrder') || 'default';
  });
  const [selectedZone, setSelectedZone] = useState(() => {
    return localStorage.getItem('selectedZone') || '';
  });

  // Guardar los filtros seleccionados en el localStorage
  useEffect(() => {
    localStorage.setItem('selectedType', selectedType);
    localStorage.setItem('selectedCategory', selectedCategory);
    localStorage.setItem('selectedPriceOrder', selectedPriceOrder);
    localStorage.setItem('selectedZone', selectedZone);

    // Aplicar los filtros combinados cada vez que cambie alguno de los estados de los filtros
    dispatch(filterCombined(selectedType, selectedCategory, selectedPriceOrder, selectedZone));
  }, [selectedType, selectedCategory, selectedPriceOrder, selectedZone, dispatch]);

  // Funciones para manejar cambios en los filtros
  const handlerType = (e) => {
    setSelectedType(e.target.value);
  };

  const handlerCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlerPriceOrder = (e) => {
    setSelectedPriceOrder(e.target.value);
  };

  const handleZone = (e) => {
    setSelectedZone(e.target.value);
  };

  const handleResetFilters = () => {
    setSelectedType('all');
    setSelectedCategory('all');
    setSelectedPriceOrder('default');
    setSelectedZone('');
  };

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.selectContainer}>

        {/* Selector de categoría */}
        <select value={selectedCategory} onChange={handlerCategory} className={styles.selectButton}>
          <option value="all">¿Qué busca?</option>
          <option value="arriendo">Arriendo</option>
          <option value="venta">Venta</option>
        </select>

        {/* Selector de tipo */}
        <select value={selectedType} onChange={handlerType} className={styles.selectButton}>
          <option value="all">¿Tipo de propiedad?</option>
          <option value="casa">Casa</option>
          <option value="departamento">Departamento</option>
        </select>

        {/* Selector de orden de precio */}
        <select value={selectedPriceOrder} onChange={handlerPriceOrder} className={styles.selectButton}>
          <option value="default">Ordenar: $</option>
          <option value="ASC">Ascendente</option>
          <option value="DESC">Descendente</option>
        </select>

        {/* Campo de entrada para la zona */}
        <input
          className={styles.searchButton}
          onChange={handleZone}
          placeholder={"Buscar Comuna..."}
          type="text"
          value={selectedZone}
        />
        
        {/* Botón para resetear filtros */}
        <button className={styles.button} onClick={handleResetFilters}><span>Resetear Filtros</span></button>
      </div>
    </div>
  );
};

export default NavBar;
