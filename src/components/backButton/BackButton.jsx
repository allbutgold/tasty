import { Link } from "react-router-dom";

const BackButton = () => {
    return (
        <section>
            <Link to={'/home'}>Back</Link>
        </section>

    );
}

export default BackButton;