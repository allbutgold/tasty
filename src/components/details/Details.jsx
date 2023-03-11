// import scss
import styles from '../details/details.module.scss';
import { Parallax } from 'react-parallax';


// import libraries
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Details = ({ meal }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    return (
        <section className={styles.details}>
            <Parallax
                blur={{ min: -17, max: 17 }}
                bgImage={meal.strMealThumb}
                bgImageAlt={meal.strMeal}
                bgImageStyle={{ maxHeight: '400px' }}
                strength={90}>
                renderLayer={percentage => (
                    <h1>asdsd</h1>

                )}
                <h1>{meal.strMeal}</h1>
                <div>
                    <button>asdasd</button>
                </div>
            </Parallax>

            <article className={styles.detailsContainer}>

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
                        <h2>Instructions</h2>
                        <article>
                            <p>{meal.strInstructions}</p>
                        </article>

                    </>
                ) : (
                    <>
                        <h2>Ingredients</h2>
                        <article>
                            <div>
                                <p>{`${meal.strIngredient2} ${meal.strMeasure2}`}</p>
                            </div>
                            <div className={styles.ingrediantRow}>
                                <p>{`${meal.strIngredient3} ${meal.strMeasure3}`}</p>
                            </div>
                            <div className={styles.ingrediantRow}>
                                <p>{`${meal.strIngredient1} ${meal.strMeasure1}`}</p>
                            </div>
                            <div className={styles.ingrediantRow}>
                                <p>{`${meal.strIngredient4} ${meal.strMeasure4}`}</p>
                            </div>
                            <div className={styles.ingrediantRow}>
                                <p>{`${meal.strIngredient5} ${meal.strMeasure5}`}</p>
                            </div>
                            <div className={styles.ingrediantRow}>
                                <p>{`${meal.strIngredient6} ${meal.strMeasure6}`}</p>
                            </div>
                            <div className={styles.ingrediantRow}>
                                <p>{`${meal.strIngredient7} ${meal.strMeasure7}`}</p>
                            </div>
                            <div className={styles.ingrediantRow}>
                                <p>{`${meal.strIngredient8} ${meal.strMeasure8}`}</p>
                            </div>
                            <div className={styles.ingrediantRow}>
                                <p>{`${meal.strIngredient9} ${meal.strMeasure9}`}</p>
                            </div>
                            <div className={styles.ingrediantRow}>
                                <p>{`${meal.strIngredient10} ${meal.strMeasure10}`}</p>
                            </div>
                            <div className={styles.ingrediantRow}>
                                <p>{`${meal.strIngredient11} ${meal.strMeasure11}`}</p>
                            </div>
                            <div className={styles.ingrediantRow}>
                                <p>{`${meal.strIngredient12} ${meal.strMeasure12}`}</p>
                            </div>
                            <div className={styles.ingrediantRow}>
                                <p>{`${meal.strIngredient13} ${meal.strMeasure13}`}</p>
                            </div>
                            <div className={styles.ingrediantRow}>
                                <p>{`${meal.strIngredient14} ${meal.strMeasure14}`}</p>
                            </div>
                            <div className={styles.ingrediantRow}>
                                <p>{`${meal.strIngredient15} ${meal.strMeasure15}`}</p>
                            </div>
                            <div className={styles.ingrediantRow}>
                                <p>{`${meal.strIngredient16} ${meal.strMeasure16}`}</p>
                            </div>
                            <div className={styles.ingrediantRow}>
                                <p>{`${meal.strIngredient17} ${meal.strMeasure17}`}</p>
                            </div>
                            <div className={styles.ingrediantRow}>
                                <p>{`${meal.strIngredient18} ${meal.strMeasure18}`}</p>
                            </div>
                            <div className={styles.ingrediantRow}>
                                <p>{`${meal.strIngredient19} ${meal.strMeasure19}`}</p>
                            </div>
                            <div className={styles.ingrediantRow}>
                                <p>{`${meal.strIngredient20} ${meal.strMeasure20}`}</p>
                            </div>
                        </article>
                    </>
                )}
                <Link target="_blank" to={meal.strYoutube}>Video</Link>
            </article>

        </section >

    );
}

export default Details;