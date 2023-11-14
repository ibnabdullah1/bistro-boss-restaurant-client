import { useParams } from "react-router-dom";
import orderImg from "../../../assets/shop/banner2.jpg";
import { useEffect, useMemo, useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
  const categories = useMemo(
    () => ["salad", "pizza", "soup", "dessert", "drinks"],
    []
  );
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(
    initialIndex !== -1 ? initialIndex : 0
  );
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  useEffect(() => {
    const categoryIndex = categories.indexOf(category);
    if (categoryIndex !== -1 && categoryIndex !== tabIndex) {
      setTabIndex(categoryIndex);
    }
  }, [category, tabIndex, categories]);
  return (
    <div>
      <Cover img={orderImg} title="Order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex cursor-pointer justify-center gap-3 text-xl font-bold mt-20 mb-10">
          {categories.map((cat, index) => (
            <Tab
              key={index}
              className={`border px-4 py-2 ${
                tabIndex === index ? "bg-black text-white" : ""
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Tab>
          ))}
        </TabList>

        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
