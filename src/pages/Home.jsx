

// import components
import MealOfTheDay from "../components/mealOfTheDay/MealOfTheDay.jsx";
import AreaSlider from '../components/areaSlider/AreaSlider'
import CatSlider from '../components/catSlider/CatSlider'


const Home = () => {

  return (


    <section className="home">
      <MealOfTheDay />
      <AreaSlider />
      <CatSlider />
    </section>

  );
}

export default Home;