// import scss
import styles from '../areaCards/areaCards.module.scss';


const AreaCards = ({area}) => {


    return (
        <section className={styles.areaCards}>
            <img src={area.strMealThumb} alt={area.strMeal} />
            <h1>{area.strMeal}</h1>
        </section>
        
    );
}

export default AreaCards;