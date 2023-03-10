// import library
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

// import components
import CatCards from '../components/catCards/CatCards.jsx'

const SearchCategory = () => {
    const { cat } = useParams()
    const [catResult, setCatResult] = useState([])


    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
            .then(res => res.json())
            .then(data => {
                setCatResult(data.meals)
            })
    }, [cat])

    return (
        <section>
            {
                catResult &&
                catResult.map(cat => {
                    return (<CatCards key={cat.idMeal} cat={cat} />)
                })}

        </section>

    );
}

export default SearchCategory;