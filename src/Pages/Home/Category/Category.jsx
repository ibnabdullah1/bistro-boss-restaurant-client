import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide className="relative rounded-md">
          <img src={slide1} alt="" />
          <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
          <h3 className="absolute text-4xl uppercase text-center bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative rounded-md">
          <img src={slide2} alt="" />
          <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
          <h3 className="absolute text-4xl uppercase text-center bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative rounded-md">
          <img src={slide3} alt="" />
          <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
          <h3 className="absolute text-4xl uppercase text-center bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative rounded-md">
          <img src={slide4} alt="" />
          <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
          <h3 className="absolute text-4xl uppercase text-center bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative rounded-md">
          <img src={slide5} alt="" />
          <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
          <h3 className="absolute text-4xl uppercase text-center bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
