import { useEffect, useState } from "react";

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
        {searchResult.map(result => <li key={result.idMeal}><img width="50" src={result.strMealThumb
        } alt={result.strMeal
        }/>{result.strMeal}</li>)}
      </ul>

        </section>
    );
}

export default SearchByName;