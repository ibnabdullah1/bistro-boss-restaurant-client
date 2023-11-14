import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import SpecialFood from "../SpecialFood/SpecialFood";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant/Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <SpecialFood />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
