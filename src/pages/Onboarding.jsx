import { Link } from 'react-router-dom'

import styles from './onboarding.module.scss'

/* 
TODOS:
    TODO: add stylings
    TODO: import vector graphics from figma
*/

const Onboarding = () => {
    return (
        <section className={styles.onboarding}>
            <div>
                <article>
                <h1>All the recipes you needed</h1>
                <p>5000+ healthy recipes made by people for your healthy life</p>
                <Link to='/home'>
                    <button>Get Started</button>
                </Link>
            </article>
            </div>
            
        </section>
    );
}

export default Onboarding;