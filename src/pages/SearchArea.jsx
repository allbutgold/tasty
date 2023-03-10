// import library
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

// import compoenents
import AreaCards from '../components/areaCards/AreaCards.jsx';
import AreaSlider from '../components/areaSlider/AreaSlider.jsx';
import BackButton from '../components/backButton/BackButton.jsx'


const SearchArea = () => {
    const { area } = useParams();
    const [areaResult, setAreaResult] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
            .then(res => res.json())
            .then(data => {
                setAreaResult(data.meals)
            })
    }, [area])


    return (
        <section>
            <BackButton />
            <AreaSlider />
            {areaResult &&
                areaResult.map(area => {

                    return (

                        <AreaCards key={area.idMeal} area={area} />

                    )
                })}


        </section>


    );
}

export default SearchArea;