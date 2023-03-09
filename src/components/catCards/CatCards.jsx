// import scss
import styles from '../catCards/catCards.module.scss';


const CarCards = ({cat}) => {
    const mealId = cat.idMeal;
    

    return (
        <section className={styles.catCards}>
            <h1>{cat.strMeal}</h1>
            <img src={cat.strMealThumb} alt="" />
        </section>
        
        
    );
}

export default CarCards;