// import libraries
import { Link } from 'react-router-dom'

// import images
import Logo from '../img/Logo.svg'

// import scss
import styles from './splashScreen.module.scss'

const SplashScreen = () => {
    return (
        <Link to='/onboarding' className={styles.splashScreen}>
            <section>
                    <h1>TASTY</h1>
                    <img src={Logo} alt="" />
                    
            

            </section>
        </Link >
    );
}

export default SplashScreen;