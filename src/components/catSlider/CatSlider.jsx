import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

/* 
TODOS:
    
*/

const CatSlider = () => {

    const [cat, setCat] = useState([])
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setCat(data.categories))
    }, [])

    console.log(cat);

    return (
        <section className="catSlider">
            <div>
                <h2>Categories</h2>
                <button onClick={() => setToggle(!toggle)}>See All</button>
            </div>

            <article style={{ display: 'flex' }}>
                {cat.map((category) => {
                    return (
                        toggle ?
                            <Link to={`/searchcategory/${category.strCategory}`}>
                                <div>
                                    <img src={category.strCategoryThumb} alt="" />
                                    {category.strCategory}
                                </div>
                            </Link> : null)
                })}

                {toggle ? null :
                    <>
                        <Link to={'/searchcategory/Beef'}>
                            <div>
                                <img src={cat[0].strCategoryThumb} alt="" />
                                Beef
                            </div>
                        </Link>
                        <Link to={'/searchcategory/Chicken'}>
                            <div>
                                <img src={cat[1].strCategoryThumb} alt="" />
                                Chicken
                            </div>
                        </Link>
                        <Link to={'/searchcategory/Dessert'}>
                            <div>
                                <img src={cat[2].strCategoryThumb} alt="" />
                                Dessert
                            </div>
                        </Link>
                    </>
                }
            </article>
        </section >
    );
}

export default CatSlider;