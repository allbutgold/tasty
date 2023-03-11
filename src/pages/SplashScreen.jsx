// import libraries
import { Link } from 'react-router-dom'
import { gsap } from "gsap";

// import images
import logoTypo from '../img/logoTypo.png'

// import scss
import styles from './splashScreen.module.scss'

const SplashScreen = () => {
    gsap.to(".tasty", { x: 200 })
    return (
        <Link to='/onboarding' className={styles.splashScreen}>
            <section>
                <h1>TASTY</h1>
                <img src={logoTypo} alt="" />


            </section>
        </Link >
    );
}

export default SplashScreen;