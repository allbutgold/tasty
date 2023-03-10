// import library
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

// import compoenents
import AreaCards from '../components/areaCards/AreaCards.jsx';
import AreaSlider from '../components/areaSlider/AreaSlider.jsx';
import BackButton from '../components/backButton/BackButton.jsx'
import Navigation from '../components/navigation/Navigation.jsx';

// import scss
import styles from '../pages/searchArea.module.scss'


const SearchArea = () => {
    const { area: areaFromParams } = useParams();
    const [searchTerm, setSearchTerm] = useState('');
    const [areaResult, setAreaResult] = useState([]);

    useEffect(() => {
        const url = searchTerm ? `https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchTerm}` : `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaFromParams}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAreaResult(data.meals)
            })
    }, [searchTerm, areaFromParams])

    const handleSubmit = e => {
        e.preventDefault()
        setSearchTerm(e.target[0].value);
    }

    return (
        <>
            <section className={styles.searchArea}>
                
                <form onSubmit={handleSubmit}>
                    <input type="search" placeholder='🔍' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                    <button type='submit'>Search</button>
                </form>
                <BackButton />
                <AreaSlider />
                {areaResult &&
                    areaResult.map(area => {
                        return (
                            <AreaCards
                                key={area.idMeal}
                                area={area} />
                        )
                    })}


            </section>
            <Navigation />
        </>

    );
}

export default SearchArea;