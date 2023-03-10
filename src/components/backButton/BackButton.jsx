import { Link } from "react-router-dom";
import styles from './backButton.module.scss'

const BackButton = () => {
    return (
        <section className={styles.backButton}>
            <Link to={'/home'}>&larr; Back</Link>
        </section>

    );
}

export default BackButton;