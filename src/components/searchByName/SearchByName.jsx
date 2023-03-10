import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const SearchByName = () => {

    
    const [search, setSearch] = useState
    ("Arrabiata");



    return (
        <section>
            <input type="search" onChange={e => setSearch(e.target.value)}/>
            <Link to={`/searchresult/${search}`}>
            <button>Search</button>
            </Link>

        </section>
    );
}

export default SearchByName;