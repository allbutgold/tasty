import { Link } from 'react-router-dom'


import './navigation.modules.scss'
import iconHome from '../../img/icons/iconHome.svg'
// import iconHomeSelected from '../../img/icons/iconHomeSelected.svg'
import iconSearch from '../../img/icons/iconSearch.svg'
// import iconSearchSelected from '../../img/icons/iconSearchSelected.svg'
import iconHeart from '../../img/icons/iconHeart.svg'
import iconUser from '../../img/icons/iconUser.svg'

const Navigation = () => {



    return (
        <section className='navigation'>
            <nav>
                <Link
                    to='/home'>
                    <img src={iconHome} alt='' />
                </Link>

                <Link
                    to='/searchResult/veg'>
                    <img src={iconSearch} alt="" />
                </Link>
                <Link
                    to='/'
                    style={{
                        pointerEvents: 'none',
                        opacity: '60%'
                    }}>
                    <img src={iconHeart} alt="" />
                </Link>
                <Link
                    to='/'
                    style={{
                        pointerEvents: 'none',
                        opacity: '60%'
                    }}>
                    <img src={iconUser} alt="" />
                </Link>
            </nav>
        </section >
    );
}

export default Navigation;