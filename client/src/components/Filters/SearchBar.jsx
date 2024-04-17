import { useState } from "react";
import styles from "../Filters/SearchBar.module.css";
import { useDispatch } from "react-redux";
import { addProperty } from "..//../redux/actions/index";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [property, setProperty] = useState('');

    const handleChange = (e) => {
        setProperty(e.target.value);
    }

    const onSearch = () => {
        console.log(property);
        dispatch(addProperty(property));
    }

    const onSearchEnter = (e) => {
        if (e.keyCode === 13) {
            console.log(property);
            dispatch(addProperty(property));
        }
    }

    return (
        <>
            <div className={styles.inputGroup}>
                <input onChange={handleChange} className={styles.submitBtn} onKeyDown={onSearchEnter} placeholder="Comuna" type="text" />
                <button onClick={onSearch} className={styles.submitBtn}><span>BUSCAR</span></button>
            </div>
        </>
    );
}

export default SearchBar;
