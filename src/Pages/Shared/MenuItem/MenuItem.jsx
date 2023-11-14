const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-2 px-10">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px] h-[70px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase font-semibold">{name} ----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
