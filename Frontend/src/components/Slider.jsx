import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../index.css";

const Slider = ({ children }) => {
  return (
    <Swiper
     
      modules={[Navigation]}
      spaceBetween={20}
      navigation={true}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
