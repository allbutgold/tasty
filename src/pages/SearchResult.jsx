import SearchByName from '../components/searchByName/SearchByName'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';
import BackButton from '../components/backButton/BackButton';

// import scss
import styles from './searchResult.module.scss'

const SearchResult = () => {

    const [results, setResults] = useState([]);
    const { search } = useParams();

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data =>
                setResults(data.meals))
    }, [search])

    return (
        <section className={styles.searchResult}>
            <SearchByName />
            <BackButton />
            {
                results &&
                results.map(results => {
                    return (
                        <Link
                            to={`/detailspage/${results.idMeal}`}>
                            <img src={results.strMealThumb} alt="" />
                            <h1>{results.strMeal}</h1></Link>
                    )
                })
            }
            <Navigation />
        </section>
    );
}

export default SearchResult;