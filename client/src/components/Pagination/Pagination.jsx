/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styles from '../Pagination/Pagination.module.css';

export const Pagination = ({ pagina, setPagina, totalPages }) => {
    const [input, setInput] = useState(totalPages ? 1 : '');

    useEffect(() => {
        setInput(pagina);
    }, [pagina]);

    useEffect(() => {
        console.log("Total pages:", totalPages);
    }, [totalPages]); // Se ejecutará cada vez que totalPages cambie

    const nextPage = () => {
        if (pagina < totalPages) {
            const nextPageNumber = pagina + 1;
            setInput(nextPageNumber);
            setPagina(nextPageNumber);
        }
    };

    const previousPage = () => {
        if (pagina > 1) {
            const previousPageNumber = pagina - 1;
            setInput(previousPageNumber);
            setPagina(previousPageNumber);
        }
    };

    const goToFirstPage = () => {
        setInput(1);
        setPagina(1);
    };

    // const goToLastPage = () => {
    //     setInput(totalPages);
    //     setPagina(totalPages);
    // };

    const onKeyDown = e => {
        if (e.keyCode === 13) {
            let newPage = parseInt(e.target.value);
            if (newPage < 1) {
                newPage = 1;
            } else if (newPage > totalPages) {
                newPage = totalPages;
            }
            setInput(newPage);
            setPagina(newPage);
        }
    };

    const onChange = e => {
        setInput(parseInt(e.target.value));
    };

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
                disabled={pagina === 1}
                onClick={previousPage}
            >
                &#10094;
            </button>

            <input
                onChange={e => onChange(e)}
                onKeyDown={e => onKeyDown(e)}
                name="page"
                autoComplete="off"
                value={input}
            />

            <button
                className={styles.black}
                disabled={pagina === totalPages || totalPages === 0}
                onClick={nextPage}
            >
                &#10095;
            </button>

            {/* <button
                className={styles.black}
                disabled={pagina === totalPages || totalPages === 0}
                onClick={goToLastPage}
            >
               &#10095;&#10095;
            </button> */}
        </div>
    );
};