import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AreaSlider = () => {

    const [area, setArea] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
            .then((response) => response.json())
            .then((data) => setArea(data.meals))
    }, [])

    console.log(area);

    return (
        <section>
            <div>
                <h2>Areas</h2>
                <Link to='/SearchArea/:all'>See All</Link>
            </div>
            {area.map((item, i) => {
                return (
                    <Link to={`/searcharea/${item.strArea}`}>{item.strArea}</Link>
                )
            })}
        </section>

    );
}

export default AreaSlider