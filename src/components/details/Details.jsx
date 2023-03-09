// import scss
import styles from '../details/details.module.scss';

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
                <h4>{`1. ${meal.strIngredient1} ${meal.strMeasure1}`}</h4>
                <h4>{`2. ${meal.strIngredient2} ${meal.strMeasure2}`}</h4>
                <h4>{`3. ${meal.strIngredient3} ${meal.strMeasure3}`}</h4>
                <h4>{`4. ${meal.strIngredient4} ${meal.strMeasure4}`}</h4>
                <h4>{`5. ${meal.strIngredient5} ${meal.strMeasure5}`}</h4>
                <h4>{`6. ${meal.strIngredient6} ${meal.strMeasure6}`}</h4>
                <h4>{`7. ${meal.strIngredient7} ${meal.strMeasure7}`}</h4>
                <h4>{`8. ${meal.strIngredient8} ${meal.strMeasure8}`}</h4>
                <h4>{`9. ${meal.strIngredient9} ${meal.strMeasure9}`}</h4>
                <h4>{`10. ${meal.strIngredient10} ${meal.strMeasure10}`}</h4>
                <h4>{`11. ${meal.strIngredient11} ${meal.strMeasure11}`}</h4>
                <h4>{`12. ${meal.strIngredient12} ${meal.strMeasure12}`}</h4>
                <h4>{`13. ${meal.strIngredient13} ${meal.strMeasure13}`}</h4>
            </article>
            <article>
                <h2>Instructions</h2>
                <p>{meal.strInstructions}</p>
            </article>
        </section>

    );
}

export default Details;