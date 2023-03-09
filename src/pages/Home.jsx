

// import components
import MealOfTheDay from "../components/mealOfTheDay/MealOfTheDay.jsx";
import AreaSlider from '../components/areaSlider/AreaSlider'


const Home = () => {

    return ( 


        <section className="home">
            <h1>This is the Home page</h1>
            <AreaSlider />
            <MealOfTheDay />
        </section>
        
    );
}

export default Home;