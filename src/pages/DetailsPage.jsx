// import libraries
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import components
import Details from '../components/details/Details.jsx'
import Navigation from '../components/navigation/Navigation.jsx';

const DetailsPage = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals)
            )
    }, [id]);

    return (
        <section>
            {
                meal && meal.map(meal => {
                    return (<Details key={meal.idMeal} meal={meal} />)
                })
            }
            <Navigation />
        </section>
    );
}

export default DetailsPage;