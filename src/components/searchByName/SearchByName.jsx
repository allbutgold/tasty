import { useState } from "react";
import { Link } from 'react-router-dom';


import styles from './searchByName.module.scss';

const SearchByName = () => {
    const [search, setSearch] = useState()

    return (
        <section className={styles.searchByName}>
            <input placeholder="🔍" type="search" onChange={e => setSearch(e.target.value)} />
            <Link to={`/searchresult/${search}`}>search
            </Link >
        </section >

    );
}

export default SearchByName;