// library import
import {useState, useEffect} from 'react';

const MealOfTheDay = () => {
    const [randomMeal, setRandomMeal] = useState(null);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRandomMeal(data.meals[0])
            })
            
    },[]);

    if (!randomMeal) return null;

    return (
        <section className='mealOfTheDay'>
            <h1>Meal of the day component</h1>
        <h1>{randomMeal.strMeal}</h1>
        <p>{randomMeal.strCategory}</p>
        <p>{randomMeal.strArea}</p>
        </section>
        
        
    );
    }

export default MealOfTheDay;