import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "./CharacterGallery.css";
const CharacterGallery = ({ images, characterName }) => {
  return (
    <div className="character-gallery">
      <Swiper
        modules={[A11y, Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1}
        aria-label={`${characterName} image gallery`}
        autoplay={{
          delay: 2000,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image}>
            <img
              src={image}
              alt={
                index === 0
                  ? `${characterName} character portrait`
                  : `${characterName} gallery image ${index + 1}`
              }
              className="character-gallery-image swiper-slide-active"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CharacterGallery;
