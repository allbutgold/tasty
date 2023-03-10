

// import components
import MealOfTheDay from "../components/mealOfTheDay/MealOfTheDay.jsx";
import AreaSlider from '../components/areaSlider/AreaSlider'
import CatSlider from '../components/catSlider/CatSlider'
import SearchByName from "../components/searchByName/SearchByName.jsx";


const Home = () => {

  return (


    <section className="home">
      <article>
        <SearchByName/>
      </article>
      <MealOfTheDay />
      <AreaSlider />
      <CatSlider />
    </section>

  );
}

export default Home;