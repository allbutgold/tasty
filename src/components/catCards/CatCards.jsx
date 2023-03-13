// import scss
import styles from '../catCards/catCards.module.scss';

// import libraries
import { Link } from 'react-router-dom';


const CarCards = ({ cat }) => {
    const id = cat.idMeal;


    return (
        <section className={styles.catCards}>
            
            <Link to={`/detailspage/${id}`}>
                <img src={cat.strMealThumb} alt={cat.strMeal} />
            </Link>
            <h4>{cat.strMeal}</h4>  
        </section>


    );
}

export default CarCards;