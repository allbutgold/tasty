import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

/* 
TODOS:
    TODO: remove link 'see all' and add button instead
*/

const CatSlider = () => {

    const [cat, setCat] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
            .then(res => res.json())
            .then(data => setCat(data.meals))
    }, [])

    return (
        <section className="catSlider">
            <div>
                <h2>Categories</h2>
                <Link to='/#'>See All</Link>
            </div>
            {cat.map((category) => {
                return (
                    <Link to={`/searchcategory/${category.strCategory}`}>{category.strCategory}</Link>
                )
            })}

        </section >
    );
}

export default CatSlider;