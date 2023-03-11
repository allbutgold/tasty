// import scss
import styles from '../details/details.module.scss';
import { Parallax } from 'react-parallax';


// import libraries
import { Link } from 'react-router-dom';
import { useState } from 'react';

import iconHeart from '../../img/icons/iconHeart.svg'
import iconShare from '../../img/iconShare.svg'

const Details = ({ meal }) => {

    const [showIngredients, setShowIngredients] = useState(true);
    console.log(meal);

    const ingre = []
    const meas = []
    const results = []

    function Ingredient(incre, meas) {
        this.ingredient = incre;
        this.measurement = meas;
    }

    const value = Object.values(meal)

    for (let i = 9; i < 28; i++) {
        if (value[i] !== null && value[i] !== '') {
            ingre.push(value[i])
        }
    }

    for (let i = 29; i < 48; i++) {
        if (value[i] !== null && value[i] !== '') {
            meas.push(value[i])
        }
    }

    for (let i = 0; i < ingre.length; i++) {
        const ingrediant = new Ingredient(ingre[i], meas[i])
        results.push(ingrediant)
        console.log(results);
    }

    return (
        <section className={styles.details}>
            <Parallax
                blur={{ min: -17, max: 17 }}
                bgImage={meal.strMealThumb}
                bgImageAlt={meal.strMeal}
                bgImageStyle={{ maxHeight: '400px' }}
                strength={90}>
                <h1>{meal.strMeal}</h1>
            </Parallax>

            <article className={styles.detailsContainer}>
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <div className={styles.categorys}>
                        <Link
                            to={`/searchcategory/${meal.strCategory}`}
                            className={styles.tag}>
                            {meal.strCategory}
                        </Link>
                        <Link
                            to={`/searcharea/${meal.strArea}`}
                            className={styles.tag}>
                            {meal.strArea}
                        </Link>
                    </div>
                    <div>
                        <img
                            style={{
                                width: '30px',
                                pointerEvents: 'none',
                                opacity: '60%'
                            }}
                            src={iconShare} alt="" />
                        <img
                            style={{
                                width: '32px',
                                marginLeft: '10px',
                                pointerEvents: 'none',
                                opacity: '60%'
                            }}
                            src={iconHeart} alt="" />
                    </div>
                </div>

                <div id={styles.btnDiv}>
                    <button
                        className={showIngredients ? styles.btnActive : styles.btnNotActive}
                        onClick={() => setShowIngredients(!showIngredients)}>Ingredients</button>
                    <button
                        className={showIngredients ? styles.btnNotActive : styles.btnActive}
                        onClick={() => setShowIngredients(!showIngredients)}>Instructions</button>
                </div>
                {showIngredients ? (
                    <>
                        {
                            results.map((result, index) => {

                                return (
                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                        <p>{result.ingredient}</p>
                                        <p>{result.measurement}</p>
                                    </div>
                                )
                            })
                        }
                    </>
                ) : (
                    <>
                        <h2>Instructions</h2>
                        <article>
                            <p>{meal.strInstructions}</p>
                        </article>
                    </>
                )}
                <Link target="_blank" to={meal.strYoutube}>Video</Link>
            </article>

        </section >

    );
}

export default Details;