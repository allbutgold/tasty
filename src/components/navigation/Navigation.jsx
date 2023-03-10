//import library
import { useState } from 'react'

import { Link } from 'react-router-dom'

// import iconHome from '../../img/icons/iconHome.svg'
// import iconSearch from '../../img/icons/iconSearch.svg'
// import iconHeart from '../../img/icons/iconHeart.svg'
// import iconUser from '../../img/icons/iconUser.svg'

import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'

import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'

const Navigation = () => {

    const [value, setValue] = useState('home');


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section className='navigation'>

            <BottomNavigation sx={{ width: '300px' }} value={value} onChange={handleChange}>

                {/* <Link to='/home'> */}
                <BottomNavigationAction
                    component={Link}
                    to='/home'
                    label="Home"
                    value="home"
                    icon={<HomeRoundedIcon />}>
                </BottomNavigationAction>
                {/* </Link> */}

                {/* <Link to='/searchresult/veg'> */}
                <BottomNavigationAction
                    component={Link}
                    to='/searchresult/veg'
                    label="Search"
                    value="search"
                    icon={<SearchRoundedIcon />}>
                    <Link to='/home' />
                </BottomNavigationAction>
                {/* </Link> */}

                <Link
                    to='/'
                    style={{ pointerEvents: 'none' }}
                >
                    <BottomNavigationAction
                        label="Liked"
                        value="liked"
                        icon={<FavoriteRoundedIcon />}
                        sx={{
                            pointerEvents: 'none',
                            opacity: '60%'
                        }}>
                    </BottomNavigationAction>
                </Link>

                <Link
                    to='/'
                    style={{ pointerEvents: 'none' }}
                >
                    <BottomNavigationAction
                        label="Profile"
                        value="recents"
                        icon={<Person2RoundedIcon />}
                        sx={{
                            pointerEvents: 'none',
                            opacity: '60%'
                        }}
                    >
                    </BottomNavigationAction>
                </Link>
            </BottomNavigation>


            {/* <nav>
                <Link to='/home'>
                    <img src={iconHome} alt="" />
                </Link>
                <Link to='/searchResult/veg'>
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
                    to='/searchcategory'
                    style={{
                        pointerEvents: 'none',
                        opacity: '60%'
                    }}>
                    <img src={iconUser} alt="" />
                </Link>
            </nav> */}
        </section >
    );
}

export default Navigation;