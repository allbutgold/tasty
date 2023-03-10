import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const SearchByName = () => {

    
    const [search, setSearch] = useState
    ("Arrabiata");
    const [trigger , setTrigger] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(()=>{
        
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${trigger}`)
        .then(res => res.json())
        .then(data =>{
        setSearchResult(data.meals)
        })
    },[trigger]
    )

    function handleSearch (e) {
    setTrigger(search)

    }


    return (
        <section>
            <input type="search" onChange={e => setSearch(e.target.value)}/>

            <button onClick={handleSearch}>Search</button>

            <ul>
        {searchResult.map(result =>
        <Link to={`/detailspage/${result.idMeal}`}><li key={result.idMeal}><img width="50" src={result.strMealThumb
        } alt={result.strMeal
        }/>{result.strMeal}</li></Link> )}
      </ul>

        </section>
    );
}

export default SearchByName;