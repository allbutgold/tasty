//import library
// import { useState } from 'react'

import { Link } from 'react-router-dom'

import iconHome from '../../img/icons/iconHome.svg'
import iconHomeSelected from '../../img/icons/iconHomeSelected.svg'
import iconSearch from '../../img/icons/iconSearch.svg'
import iconHeart from '../../img/icons/iconHeart.svg'
import iconUser from '../../img/icons/iconUser.svg'

const Navigation = ({ path, setPath }) => {

    console.log('navvvvv');
    return (
        <section className='navigation'>
            <nav>
                <Link
                    onClick={() => setPath(prev => prev = 'home')}
                    to='/home'>
                    <div>
                        <img src={
                            path === 'home' ?
                                iconHomeSelected :
                                iconHome}
                            alt="" />
                        {path === 'home' ? <p style={{ fontSize: '0.6em' }}>Home</p> : null}
                    </div>
                </Link>

                <Link
                    onClick={() => setPath(prev => prev = 'search')}
                    to='/searchResult/veg'>
                    <div>
                        {path === 'search' ? <p>Search</p> : null}
                        <img src={iconSearch} alt="" />
                    </div>
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