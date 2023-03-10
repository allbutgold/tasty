import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import CatCards from '../components/catCards/CatCards.jsx';
import BackButton from '../components/backButton/BackButton.jsx';
import Navigation from '../components/navigation/Navigation.jsx';


const SearchCategory = ({ path, setPath }) => {
    const { cat } = useParams();
    const [searchTerm, setSearchTerm] = useState(cat);
    const [catResult, setCatResult] = useState([]);
    console.log(path, 'asdasd');


    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchTerm}`)
            .then((res) => res.json())
            .then((data) => {
                setCatResult(data.meals)
            });
    }, [searchTerm]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(cat);
    };

    return (
        <>
            <section>
                <BackButton />
                <form>
                    <input type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <button type="submit" onClick={handleSubmit}>Search</button>
                </form>
                {catResult &&
                    catResult.map((cat) => {
                        return <CatCards key={cat.idMeal} cat={cat} />;
                    })}
            </section>

            <Navigation path={path} setPath={setPath} />
        </>
    );
};

export default SearchCategory;
