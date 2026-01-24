import { SwiperSlide } from "swiper/react";
import Slider from "./Slider";
import Card from "./Card";

  const data = [
    {
      id: 1,
      title: "2BHK Fully Furnished",
      price: "₹30,000 / month",
      img:  "../../images/home1.jpg",
    },
    {
      id: 2,
      title: "1BHK Flat for Rent",
      price: "₹18,000 / month",
      img:  "../../images/home2.jpg",
    },
    {
      id: 3,
      title: "Room for Rent",
      price: "₹8,000 / month",
      img:  "../../images/home3.jpg",
    },
    {
      id: 4,
      title: "Shop for Rent",
      price: "₹25,000 / month",
      img: "../../images/home1.jpg",
    },
     {
      id: 5,
      title: "Shop for Rent",
      price: "₹25,000 / month",
      img: "../../images/home2.jpg",
    },
     {
      id: 6,
      title: "Shop for Rent",
      price: "₹25,000 / month",
      img: "../../images/home3.jpg",
    },
    {
      id: 4,
      title: "Shop for Rent",
      price: "₹25,000 / month",
      img: "../../images/home1.jpg",
    },
     {
      id: 5,
      title: "Shop for Rent",
      price: "₹25,000 / month",
      img: "../../images/home2.jpg",
    },
     {
      id: 6,
      title: "Shop for Rent",
      price: "₹25,000 / month",
      img: "../../images/home3.jpg",
    },
    {
      id: 4,
      title: "Shop for Rent",
      price: "₹25,000 / month",
      img: "../../images/home1.jpg",
    },
     {
      id: 5,
      title: "Shop for Rent",
      price: "₹25,000 / month",
      img: "../../images/home2.jpg",
    },
     {
      id: 6,
      title: "Shop for Rent",
      price: "₹25,000 / month",
      img: "../../images/home3.jpg",
    },
  ];

const CardSlider = () => {
  return (
    <div className="max-w-7xl mx-auto px-4  " >
      <Slider >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              title={item.title}
              price={item.price}
              img={item.img}
              id={item.id}
            />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
