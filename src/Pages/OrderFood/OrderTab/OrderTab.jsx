import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import { useState } from "react";

const OrderTab = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = items.slice(startIndex, endIndex);

  const totalItems = items.length;
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div>
      <Swiper pagination={pagination} className="mySwiper min-h-screen">
        <SwiperSlide className="min-h-[60vh]">
          <div className="grid md:grid-cols-2    px-5 lg:grid-cols-3 gap-10 max-w-6xl py-10 mx-auto">
            {itemsToShow.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </SwiperSlide>
        {items.length >= 6 && (
          <div className="flex justify-center pb-10 gap-3">
            {pages.map((page) => (
              <button
                className={`bg-gray-300 px-2 hover:bg-gray-400 py-1 ${
                  currentPage === page ? "font-bold" : ""
                }`}
                key={page}
                onClick={() => setCurrentPage(page)}
              >
                {page + 1}
              </button>
            ))}
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default OrderTab;
