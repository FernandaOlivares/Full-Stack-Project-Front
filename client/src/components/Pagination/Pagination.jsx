/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import styles from '../Pagination/Pagination.module.css';

export const Pagination = ({ pagina, setPagina, maximo }) => {
    const [input, setInput] = useState(1);

    useEffect(() => {
        setInput(pagina)
    }, [pagina]);

    // Calcula el número total de páginas
    const totalPages = 3;

    // Limita el número de páginas a mostrar a 3
    const pagesToShow = 3;

    const nextPage = () => {
        if (pagina < totalPages) {
            setInput(parseInt(input) + 1);
            setPagina(parseInt(pagina) + 1);
        }
    };

    const previousPage = () => {
        if (pagina > 1) {
            setInput(parseInt(input) - 1);
            setPagina(parseInt(pagina) - 1);
        }
    };

    const goToFirstPage = () => {
        setInput(1);
        setPagina(1);
    };

    const goToLastPage = () => {
        setInput(totalPages);
        setPagina(totalPages);
    };

    const onKeyDown = e => {
        if (e.keyCode === 13) {
            setPagina(parseInt(e.target.value));
            if (parseInt(e.target.value) < 1 || parseInt(e.target.value) > totalPages || isNaN(parseInt(e.target.value))) {
                setPagina(1);
                setInput(1);
            } else {
                setPagina(parseInt(e.target.value));
            }
        }
    };

    const onChange = e => {
        setInput(parseInt(e.target.value));
    };

    // Calcula el rango de páginas a mostrar
    const startPage = Math.max(1, pagina - Math.floor(pagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    // Genera las páginas a mostrar en el paginado
    const pages = [...Array(endPage - startPage + 1).keys()].map(i => startPage + i);

    return (
        <div className={styles.container}>
            <button
                className={styles.black}
                onClick={goToFirstPage}
            >
                &#10094;&#10094;
            </button>
            
            <button
                className={styles.black}
                disabled={pagina === 1 || pagina < 1}
                onClick={previousPage}
            >
                &#10094;
            </button>

            {pages.map(page => (
                <button
                    key={page}
                    className={`${styles.black} ${pagina === page ? styles.active : ''}`}
                    onClick={() => setPagina(page)}
                >
                    {page}
                </button>
            ))}

            <button
                className={styles.black}
                disabled={pagina === totalPages || pagina > totalPages}
                onClick={nextPage}
            >
                &#10095;
            </button>

            <button
                className={styles.black}
                onClick={goToLastPage}
            >
                &#10095;&#10095;
            </button>
        </div>
    );
};