import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AreaSlider = ({ path, setPath }) => {

    const [area, setArea] = useState([]);
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
            .then((response) => response.json())
            .then((data) => setArea(data.meals))
    }, [])

    //<Link to={`/searcharea/${item.strArea}`}>{item.strArea}</Link>
    return (
        <section>
            <div>
                <h2>Areas</h2>
                <button onClick={() => setToggle(!toggle)}>See All</button>
            </div>
            {area.map((item, i) => {

                return (
                    toggle ? <Link
                        to={`/searcharea/${item.strArea}`}
                        onClick={() => setPath('search')}>
                        {item.strArea}
                    </Link>
                        : null
                )
            })}

            {toggle ? null : <div>
                <Link
                    onClick={() => setPath('search')}
                    to={'/searcharea/American'}>
                    American
                </Link>
                <Link
                    onClick={() => setPath('search')}
                    to={'/searcharea/British'}>
                    British
                </Link>
                <Link
                    onClick={() => setPath('search')}
                    to={'/searcharea/Canadian'}>
                    Canadian
                </Link>
            </div>}
        </section>

    );

}

export default AreaSlider