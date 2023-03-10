// import scss
import styles from '../details/details.module.scss';

// import libraries
import { Link } from 'react-router-dom';


const Details = ({meal}) => {
    return (
        <section className={styles.details}>
            <h1>Details</h1>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h1>{meal.strMeal}</h1>
            <p>{meal.strCategory}</p>
            <p>{meal.strArea}</p>
            <article>
                <h2>Ingredients</h2>
                <h4>{`${meal.strIngredient1} ${meal.strMeasure1}`}</h4>
                <h4>{`${meal.strIngredient2} ${meal.strMeasure2}`}</h4>
                <h4>{`${meal.strIngredient3} ${meal.strMeasure3}`}</h4>
                <h4>{`${meal.strIngredient4} ${meal.strMeasure4}`}</h4>
                <h4>{`${meal.strIngredient5} ${meal.strMeasure5}`}</h4>
                <h4>{`${meal.strIngredient6} ${meal.strMeasure6}`}</h4>
                <h4>{`${meal.strIngredient7} ${meal.strMeasure7}`}</h4>
                <h4>{`${meal.strIngredient8} ${meal.strMeasure8}`}</h4>
                <h4>{`${meal.strIngredient9} ${meal.strMeasure9}`}</h4>
                <h4>{`${meal.strIngredient10} ${meal.strMeasure10}`}</h4>
                <h4>{`${meal.strIngredient11} ${meal.strMeasure11}`}</h4>
                <h4>{`${meal.strIngredient12} ${meal.strMeasure12}`}</h4>
                <h4>{`${meal.strIngredient13} ${meal.strMeasure13}`}</h4>
                <h4>{`${meal.strIngredient14} ${meal.strMeasure14}`}</h4>
                <h4>{`${meal.strIngredient15} ${meal.strMeasure15}`}</h4>
                <h4>{`${meal.strIngredient16} ${meal.strMeasure16}`}</h4>
                <h4>{`${meal.strIngredient17} ${meal.strMeasure17}`}</h4>
                <h4>{`${meal.strIngredient18} ${meal.strMeasure18}`}</h4>
                <h4>{`${meal.strIngredient19} ${meal.strMeasure19}`}</h4>
                <h4>{`${meal.strIngredient20} ${meal.strMeasure20}`}</h4>
            </article>
            <article>
                <h2>Instructions</h2>
                <p>{meal.strInstructions}</p>
            </article>
            <Link target="_blank" to={meal.strYoutube}>Video</Link>
        </section>

    );
}

export default Details;