import { useState } from "react";
import { Link } from 'react-router-dom';



const SearchByName = () => {
    const [search, setSearch] = useState()

    return (
        <section>
            <input type="search" onChange={e => setSearch(e.target.value)} />
            <Link to={`/searchresult/${search}`}>
            </Link>
        </section>

    );
}

export default SearchByName;