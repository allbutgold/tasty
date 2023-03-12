
import styles from './areaSlider.module.scss'

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
        <section className={styles.areaSlider}>
            <div className={styles.areaHead}>
                <h2>Areas</h2>
                <button onClick={() => setToggle(!toggle)}>See All</button>
            </div>


            <div className={styles.dropDown}>

            {area.map((item, i) => {

            return (
            toggle ? <Link to={`/searcharea/${item.strArea}`}>{item.strArea}</Link> : null
             )
             }

             )}

            </div>
           
           <div className={styles.standard}>

           {area.map((item, i) => {

            return (
            toggle ? null :

           <Link to={`/searcharea/${item.strArea}`}>{item.strArea}</Link> 

                   )
           }

           )}

           </div>


            {/*toggle ? null : <div>
                <Link to={'/searcharea/American'}>American</Link>
                <Link to={'/searcharea/British'}>British</Link>
                <Link to={'/searcharea/Canadian'}>Canadian</Link>
        </div>*/}

        </section>

    );

}

export default AreaSlider