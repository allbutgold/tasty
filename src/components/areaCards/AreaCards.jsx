
const AreaCards = ({area}) => {

    return (
        <section>
            <img src={area.strMealThumb} alt={area.strMeal} />
            <h1>{area.strMeal}</h1>
        </section>
        
    );
}

export default AreaCards;