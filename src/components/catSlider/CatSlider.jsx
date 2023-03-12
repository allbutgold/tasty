import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import styles from './catSlider.module.scss';
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
        <section className={styles.catSlider}>
            <div className={styles.catHead}>
                <h2>Categories</h2>
                <button onClick={() => setToggle(!toggle)}>See All</button>
            </div>

            <article className={styles.sliderContainer}>
                <div className={styles.sliderSeeAll}>
                  {cat.map((category) => {

                    return (
                        toggle ?
                            <Link to={`/searchcategory/${category.strCategory}`}>
                                <div>
                                    <img src={category.strCategoryThumb} alt="" />
                                    <p>{category.strCategory}</p>
                                </div>
                            </Link> 
                            : null)
                   })}
                </div>

                  <div className={styles.sliderStandard}>
                  {cat.map((category) => {
                    return (
                
                        toggle ? null :

                        
                            <Link to={`/searchcategory/${category.strCategory}`}>
                                <div>
                                    <img src={category.strCategoryThumb} alt="" />
                                    <p>{category.strCategory}</p>
                                </div>
                            </Link> 
                        
                             )
                  })}
                 </div>

  
            </article>
        </section >
    );
}

export default CatSlider;