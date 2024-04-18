/* eslint-disable react/prop-types */
// import { useEffect, useState } from 'react';
// import styles from '../Pagination/Pagination.module.css';

// export const Pagination = ( pagina, setPagina, maximo ) => {
//     const [input, setInput] = useState(1);

//     useEffect(() => {
//         setInput(pagina)
//     }, [pagina]);

//     const nextPage = () => {
//         setInput(parseInt(input) + 1);
//         setPagina(parseInt(pagina) + 1);
//     };

//     const previousPage = () => {
//         setInput(parseInt(input) - 1);
//         setPagina(parseInt(pagina) - 1);
//     };

//     const goToFirstPage = () => {
//         setInput(1);
//         setPagina(1);
//     };

//     const goToLastPage = () => {
//         setInput(Math.ceil(maximo));
//         setPagina(Math.ceil(maximo));
//     };

//     const onKeyDown = e => {
//         if (e.keyCode === 13) {
//             setPagina(parseInt(e.target.value));
//             if (parseInt(e.target.value) < 1 || parseInt(e.target.value) > Math.ceil(maximo) || isNaN(parseInt(e.target.value))) {
//                 setPagina(1);
//                 setInput(1);
//             } else {
//                 setPagina(parseInt(e.target.value));
//             }
//         }
//     };

//     const onChange = e => {
//         setInput(parseInt(e.target.value));
//     };

//     return (
//         <div className={styles.container}>
            
//             <button
//                 className={styles.black}
//                 onClick={goToFirstPage}
//             >
//                 Principio
//             </button>
            
//             <button
//                 className={styles.black}
//                 disabled={pagina === 1 || pagina < 1}
//                 onClick={previousPage}
//             >
//                 Atras
//             </button>

//             <input
//                 onChange={e => onChange(e)}
//                 onKeyDown={e => onKeyDown(e)}
//                 name="page"
//                 autoComplete="off"
//                 value={input}
//             />
//             <p> de {Math.ceil(maximo)} </p>

//             <button
//                 className={styles.black}
//                 disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)}
//                 onClick={nextPage}
//             >
//                 Siguiente
//             </button>

//             <button
//                 className={styles.black}
//                 onClick={goToLastPage}
//             >
//                Final
//             </button>
//         </div>
//     );
// };




import { useEffect, useState } from 'react';
import styles from '../Pagination/Pagination.module.css';

export const Pagination = ({ pagina, setPagina, maximo }) => {
    const [input, setInput] = useState(1);

    useEffect(() => {
        setInput(pagina)
    }, [pagina]);

    const nextPage = () => {
        setInput(parseInt(input) + 1);
        setPagina(parseInt(pagina) + 1);
    };

    const previousPage = () => {
        setInput(parseInt(input) - 1);
        setPagina(parseInt(pagina) - 1);
    };

    const goToFirstPage = () => {
        setInput(1);
        setPagina(1);
    };

    const goToLastPage = () => {
        setInput(Math.ceil(maximo));
        setPagina(Math.ceil(maximo));
    };

    const onKeyDown = e => {
        if (e.keyCode === 13) {
            setPagina(parseInt(e.target.value));
            if (parseInt(e.target.value) < 1 || parseInt(e.target.value) > Math.ceil(maximo) || isNaN(parseInt(e.target.value))) {
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

    return (
        <div className={styles.container}>
            
            <button
                className={styles.black}
                onClick={goToFirstPage}
            >
                Principio
            </button>
            
            <button
                className={styles.black}
                disabled={pagina === 1 || pagina < 1}
                onClick={previousPage}
            >
                Atras
            </button>

            <input
                onChange={e => onChange(e)}
                onKeyDown={e => onKeyDown(e)}
                name="page"
                autoComplete="off"
                value={input}
            />
            <p> de {Math.ceil(maximo)} </p>

            <button
                className={styles.black}
                disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)}
                onClick={nextPage}
            >
                Siguiente
            </button>

            <button
                className={styles.black}
                onClick={goToLastPage}
            >
               Final
            </button>
        </div>
    );
};