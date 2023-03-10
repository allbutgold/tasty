//import library
import { Link } from 'react-router-dom'


const Navigation = () => {
    return (
        <section className='navigation'>
            <nav>
                <Link to='/'>SplashScreen</Link>
                <Link to='/onboarding'>Onboarding</Link>
                <Link to='/home'>Home</Link>
            </nav>
        </section>

    );
}

export default Navigation;