
const AreaCards = ({area}) => {
    const mealId = area.idMeal;
    console.log(mealId)

    return (
        <section>
            <img src={area.strMealThumb} alt={area.strMeal} />
            <h1>{area.strMeal}</h1>
        </section>
        
    );
}

export default AreaCards;