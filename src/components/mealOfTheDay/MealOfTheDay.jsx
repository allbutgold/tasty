// library import
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

// import scss
import styles from './mealOfTheDay.module.scss'

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
    const id = randomMeal.idMeal;   

    return (
        <section className={styles.mealOfTheDay}>
            <Link to={`/detailspage/${id}`} >
                <h1>Meal of the day</h1>
                <article>
                <h2>{randomMeal.strMeal}</h2>
                <div>
                    <p>{randomMeal.strCategory}</p>
                    <p>{randomMeal.strArea}</p>            
                </div>

            </article>
            </Link>
        


        </section>
        
        
    );
    }

export default MealOfTheDay;