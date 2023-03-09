import { Link } from 'react-router-dom'

import LogoSymbol from '../img/logoSymbol.png'
import LogoTypo from '../img/logoTypo.png'

/* 
TODOS:
    TODO: import and add vector graphics from src/img
    TODO: remove inline styles and add them from the module 
 */

const SplashScreen = () => {
    return (
        <Link to='/onboarding'>
            <section
                style={{
                    backgroundColor: '#70B9BE'
                }}
                className="splashScreen" >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '300px'
                }}>
                    <img src={LogoSymbol} alt="" />
                    <img src={LogoTypo} alt="" />
                </div>

            </section>
        </Link >
    );
}

export default SplashScreen;