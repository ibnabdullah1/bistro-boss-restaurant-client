import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img from "../../../assets/home/Rectangle 5.png";
const SpecialFood = () => {
  const specialFoods = [
    {
      id: 1,

      title: "Caeser Salad",
      details: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
    },
    {
      id: 2,

      title: "Caeser Salad",
      details: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
    },
    {
      id: 3,

      title: "Caeser Salad",
      details: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
    },
  ];

  return (
    <div>
      <SectionTitle
        subHeading="Should Try"
        heading="Chef Recommends"
      ></SectionTitle>
      <div className="grid grid-cols-1 max-w-6xl mx-auto gap-5 md:grid-cols-3 px-10 ">
        {specialFoods.map((food) => (
          <div key={food.id} className="bg-[#F3F3F3] text-center">
            <div className="flex justify-center items-center mb-2 ">
              <img className="w-full" src={img} alt={food.title} />
            </div>
            <h2 className="font-bold text-xl">{food.title}</h2>
            <p>{food.details}</p>
            <button className="btn text-[#BB8506] hover:text-[#BB8506] bg-[#E8E8E8] btn-outline  border-0 border-b-4 my-4">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialFood;
