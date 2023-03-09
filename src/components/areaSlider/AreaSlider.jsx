import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AreaSlider = () => {

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
                    toggle ? <Link to={`/searcharea/${item.strArea}`}>{item.strArea}</Link> : null
                )
            }

            )}

            {toggle ? null : <div>
                <button>American</button>
                <button>British</button>
                <button>Canadian</button>
            </div>}
        </section>

    );

}

export default AreaSlider