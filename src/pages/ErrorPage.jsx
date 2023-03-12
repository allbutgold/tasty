import BackButton from '../components/backButton/BackButton.jsx'

import styles from '../pages/errorPage.module.scss';

const ErrorPage = () => {
    return ( 
        <section className={styles.errorPage}>
            <h1>This is the page of Error</h1>
            <BackButton/>
        </section>
        
    );
}

export default ErrorPage;