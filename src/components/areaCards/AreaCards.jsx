// import scss
import styles from '../areaCards/areaCards.module.scss';
import { Link } from 'react-router-dom';


const AreaCards = ({area}) => {
    const id = area.idMeal;

    return (
        
        <section className={styles.areaCards}>
            <Link to={`/detailspage/${id}`}>
                <img src={area.strMealThumb} alt={area.strMeal} />
            </Link>
            <h4>{area.strMeal}</h4>
        </section>
        
    );
}

export default AreaCards;