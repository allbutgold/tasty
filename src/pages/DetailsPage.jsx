// import libraries
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import components
import Details from '../components/details/Details.jsx'

const DetailsPage = () => {
    const {id} = useParams();
    const [meal, setMeal] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals)
            )}, [meal, id]);

    return ( 
        <section>
            <h1>Details Page</h1>
            {
                meal && meal.map(meal => {
                    return ( <Details key={meal.idMeal} meal={meal} /> )
                })
            }
        </section>
    );
}

export default DetailsPage;