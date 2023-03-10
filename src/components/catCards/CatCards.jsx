// import scss
import styles from '../catCards/catCards.module.scss';

// import libraries
import { Link } from 'react-router-dom';


const CarCards = ({cat}) => {
    const id = cat.idMeal;


    return (
        <section className={styles.catCards}>
            <h1>{cat.strMeal}</h1>
            <Link to={`/detailspage/${id}`}>
            <img src={cat.strMealThumb} alt={cat.strMeal} />
            </Link>
        </section>
        
        
    );
}

export default CarCards;