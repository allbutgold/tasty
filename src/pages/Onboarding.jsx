import { Link } from 'react-router-dom'

const Onboarding = () => {
    return (
        <section className="onboarding">
            <article>
                <h1>All recipes u need</h1>
                <p>5000+ healthy recipes made by people for your healthy life</p>
                <Link to='/home'>Get Started</Link>
            </article>
        </section>
    );
}

export default Onboarding;